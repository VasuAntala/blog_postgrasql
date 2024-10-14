import { createuser } from "../controller/index";
import { Router } from "express";

const create = Router();

create.post("/add",createuser.create);

export default create;
