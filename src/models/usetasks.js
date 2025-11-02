let tasks = [];

export function getTasks(){
    return tasks;
}

export function getTaskId(id){
    return tasks.find(task => task.id === id);
}

export function addTask(data){
    const newTask ={
        id: tasks.length + 1,
        title: data.title,
        description: data.description,
        done : false,
        creatAt: new Date.now()
    }
    tasks.push(newTask);
    return newTask;
}

export function updateTask(id, data){
    const taskIndex = tasks.findIndex(task => task.id === id);
    if(taskIndex === -1) return null;

    tasks[taskIndex] = { ...tasks[taskIndex], ...data };
    return tasks[taskIndex];
}

export function deleteTask(id){
    const taskIndex = tasks.findIndex(task => task.id === id);
    if(taskIndex === -1) return false;

    tasks.remove(taskIndex);
}