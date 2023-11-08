export class Task {
    done = false;
    name = "";
    description = "";
    id = crypto.randomUUID();
    parentId: string;

    constructor(_parentId: string) {
        this.parentId = _parentId;
    }
}