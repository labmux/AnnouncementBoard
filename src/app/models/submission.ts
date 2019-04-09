export class Submission {
    file: any;
    studentName: string;

    constructor(args?) {
        if (args) {
            this.file = args.file;
            this.studentName = args.studentName;
        }
    }
}
