import express from 'express';
import { toggleFavorite, getFavorites } from '../controllers/favorite.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.route('/toggleFavorite').post(verifyJWT, toggleFavorite);
router.route('/getFavorites').get( verifyJWT, getFavorites);

export default router;
