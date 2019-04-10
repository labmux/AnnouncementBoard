import {Assignment} from './assignment';

export class Submission {
    id: number;
    studentId: number;
    assignment: Assignment;
    date: string;
    grade: number;

    constructor(args?) {
        if (args) {
            this.studentId = args.studentId;
            this.assignment = args.assignment;
        }
    }
}
