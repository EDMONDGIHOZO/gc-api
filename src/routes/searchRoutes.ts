import { Router } from "express";
import { searchController } from "../controllers/SearchController";

const router = Router()

/**
 * @swagger
 * tags:
 *   name: Search
 *   description: In charge of managing search.
 */
router.get('/', searchController)


export default router;