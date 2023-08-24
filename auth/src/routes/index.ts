import { Router } from "express";
import * as authCont from "../controllers";

const router = Router();

router.post("/signin", authCont.signin);
router.post("/signup", authCont.signup);

export default router;
