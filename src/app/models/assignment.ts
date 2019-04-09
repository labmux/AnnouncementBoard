export class Assignment {
    submissionStatus: string;
    file: any;
    grade: string;

    constructor(args?) {
        if (args) {
            this.submissionStatus = args.submissionStatus;
            this.file = args.file;
            this.grade = args.grade;
        }
    }
}