import { Response, Request, Router } from "express";
import { connection } from "../../database/connection";



export const update = async (req: Request, res: Response) => {
    try {
      const result =  await connection.query({text:'UPDATE login SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING * ',
                                             values:[req.body.name,req.body.email,req.body.password,req.body.id]});
      res.send(result.rows);
    } catch (error) {
      res.send(error);
    }
}