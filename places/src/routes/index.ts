import { Router } from "express";
import * as placesCont from "../controllers";

const router = Router();

router.get("/", placesCont.getAll);
router.get("/:id", placesCont.getById);

router.post("/", placesCont.create);
router.patch("/:id", placesCont.updateById);

router.delete("/", placesCont.deleteAll);
router.delete("/:id", placesCont.deleteById);

export default router;
