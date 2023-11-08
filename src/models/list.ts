import { Task } from '@/models/task'

export class List {
    name: string;
    tasks = new Array<Task>;
    id = crypto.randomUUID();
    inRenameMode = false;

    constructor(_name: string){
        this.name = _name;
    };

    getTaskById(taskId: string) {
        return this.tasks.find(_task => {
            return _task.id == taskId
        })
    }

    deleteTask(task: Task) {
        let index = this.tasks.indexOf(task);

        if(index > -1) {
            this.tasks.splice(index, 1);
        }
    }
}