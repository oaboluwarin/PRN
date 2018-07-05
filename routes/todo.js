import express from 'express';
import { todoControllers } from '../controllers';

const { getAllTodos } = todoControllers;

const router = express.Router();

router.route('/')
  .get(getAllTodos)

export default router;
