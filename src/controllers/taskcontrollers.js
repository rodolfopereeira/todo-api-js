import { getTasks, getTaskId, addTask, updateTask, deleteTask } from "../models/taskmodels.js";

export const fetchTasks = (req, res) => {
    return res.status(200).json(getTasks());
}

export const fetchTaskById = (req, res) =>{
    try {
        const id = req.params.id;
        const task = getTaskId(Number(id));
        if(!task) throw new Error('Task not found');
        return res.status(200).json(task);
    } catch (error) {
        return res.status(404).json({ message: 'Task not found' });
    }
}

export const createTask = (req, res)=> {
    try{
        const data = req.body;
        const newTask = addTask(data);
        return res.status(201).json(newTask);
    } catch (error) {
        return res.status(400).json({ message: 'Error creating task' });
    }
}

export const modifyTask = (req, res)=> {
    try{
        const id = req.params.id;
        const data = req.body;
        const updatedTask = updateTask(Number(id), data);   
        return res.status(200).json(updatedTask);
    } catch (error) {
        return res.status(400).json({ message: 'Error updating task' });
    }
}

export const removeTask = (req, res)=> {
    try{
        const id = req.params.id;
        deleteTask(Number(id));
        return res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        return res.status(400).json({ message: 'Error deleting task' });
    }
}