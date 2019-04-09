import {Assignment} from './assignment';

export class Submission {
    studentId: number;
    assignment: Assignment


    constructor(args?) {
        if (args) {
            this.studentId = args.studentId;
            this.assignment = args.assignment;
        }
    }
}
