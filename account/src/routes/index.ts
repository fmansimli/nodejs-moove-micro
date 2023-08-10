import { Router } from "express";
import * as accountCont from "../controllers";

const router = Router();

router.get("/profile", accountCont.profile);
router.delete("/profile", accountCont.deleteProfile);

export default router;
