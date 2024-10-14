import { update } from "../controller";
import { Router } from "express";

const router = Router();

router.put("/update", update.update);

export default router;