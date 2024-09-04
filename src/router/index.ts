import create from "./user";
import Router from "express";

const router = Router();

router.use("/user", create);

export default router