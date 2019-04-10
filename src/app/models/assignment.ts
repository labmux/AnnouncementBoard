export class Assignment {
    id:number;
    teacher: string;
    subject: string;
    file: any;
    gradeWeight: number;
    releaseDate: string;
    dueDate: string;
    submissionStatus: string;
    submissionDate: string;

    constructor(args?) {
        if (args) {
            this.subject = args.subject;
            this.id = args.id;
            this.submissionStatus = args.submissionStatus;
            this.submissionDate = args.submissionStatus;
            this.file = args.file;
            this.gradeWeight = args.gradeWeight;
            this.dueDate = args.dueDate;
        }
    }
}