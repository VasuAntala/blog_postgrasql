import { Router } from "express";
import { deleteuser } from "../controller";

const router = Router();

router.delete("/delete", deleteuser.deleteuser);

export default router;