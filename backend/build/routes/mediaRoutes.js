import { Router } from "express";
import { createMedia, createMediaBulk } from "../controllers/mediaController.js";
const router = Router();
router.post("/media", createMedia);
router.post("/media/bulk", createMediaBulk);
export default router;
//# sourceMappingURL=mediaRoutes.js.map