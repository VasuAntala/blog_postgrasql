import {Router} from "express";
import create from "./user";
import update from "./update";
import deleteuser from "./delete";
import read from "./read";

const router = Router();

router.use("/user", create);

router.use("/user", read);

router.use("/user", update);

router.use("/user", deleteuser);

export default router