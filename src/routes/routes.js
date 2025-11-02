import { Router } from "express";
import { createTask, fetchTaskById, fetchTasks, modifyTask, removeTask } from "../controllers/taskcontrollers.js";

export const router = Router();

router.get('/tasks',fetchTasks);
router.get('/tasks/:id', fetchTaskById);
router.post('/tasks', createTask);
router.put('/tasks/:id', modifyTask);
router.delete('/tasks/:id', removeTask);