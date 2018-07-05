import express from 'express';
import { userControllers } from '../controllers';

const { getAllUsers } = userControllers;

const router = express.Router();

router.route('/')
  .get(getAllUsers)

export default router;
