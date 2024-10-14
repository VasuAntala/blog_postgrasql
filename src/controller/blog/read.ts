import { Response, Request } from "express";
import { connection } from "../../database/connection";

export const read = async (req: Request, res: Response) => {
    try {
        const result = await connection.query("SELECT * FROM login");
        res.send(result.rows);
    } catch (error) {
        res.send(error);
    }
}