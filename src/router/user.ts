import { createUser } from "../controller/blog/user";
import { Router } from "express";

const create = Router();

create.post("/create",createUser);

export default create
