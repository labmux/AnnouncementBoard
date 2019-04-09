import {Assignment} from './assignment';

export class Announcement {
    subject: string;
    dueDate: string;
    releaseDate: string;
    body: string;
    grade: string;
    id: number;
    assignment: Assignment;

    constructor(args?) {
        if (args) {
            this.subject = args.subject;
            this.dueDate = args.dueDate;
            this.releaseDate = args.releaseDate;
            this.body = args.b;
            this.grade = args.grade;
            this.id = args.id;
            this.assignment = args.assignment;
        }
    }
}
