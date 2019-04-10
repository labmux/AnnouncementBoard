import {Assignment} from './assignment';

export class Announcement {
    teacher: string;
    subject: string;
    dueDate: string;
    releaseDate: string;
    body: string;
    gradeWorth: string;
    id: number;
    assignment: Assignment;

    constructor(args?) {
        if (args) {
            this.subject = args.subject;
            this.dueDate = args.dueDate;
            this.releaseDate = args.releaseDate;
            this.body = args.b;
            this.gradeWorth = args.gradeWorth;
            this.id = args.id;
            this.assignment = args.assignment;
        }
    }
}
