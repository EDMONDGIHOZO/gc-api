import { Router } from "express";
import { searchController } from "../controllers/SearchController";

const router = Router()

router.get('/', searchController)


export default router;