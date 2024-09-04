import { Response, Request, Router } from "express";
import { connection } from "../../database/connection";

export const createUser = async (req: Request, res: Response) => {
    try {
      const result =  await connection.query({text:'INSERT INTO login (name,email,password) VALUES ($1,$2,$3) RETURNING *',
            values:[req.body.name,req.body.email,req.body.password]});
   
        res.send(result.rows);;
        res.sendStatus(201);
    } catch (error) {    
        res.sendStatus(500);
    }
}   