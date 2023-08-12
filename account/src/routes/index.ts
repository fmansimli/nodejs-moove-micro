import { Router } from "express";
import * as accountCont from "../controllers";

const router = Router();

router.get("/profile", accountCont.profile);
router.delete("/profile", accountCont.deleteProfile);

router.get("/users", accountCont.getAll);
router.get("/users/:id", accountCont.getById);
router.post("/users", accountCont.create);

export default router;
