import { Request, Response } from "express";
import {connection} from "../../database/connection";

export const deleteuser = async (req: Request, res: Response) => {
    try {
        const result = await connection.query({
            text: "DELETE FROM login WHERE id = $1",
            values: [req.body.id],
        });
        res.send(result.rows);
    } catch (error) {
        res.send(error);
    }
}