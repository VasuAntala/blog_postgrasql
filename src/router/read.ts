import { Router } from "express";   
import { read } from "../controller";

const router = Router();

router.get("/read", read.read);

export default router;