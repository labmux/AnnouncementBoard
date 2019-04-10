import {Assignment} from './assignment';

export class Announcement {
    teacher: string;
    subject: string;
    body: string;
    releaseDate: string;
    constructor(args?) {
        if (args) {
            this.subject = args.subject;
            this.teacher = args.teacher;
            this.body = args.body;
            this.releaseDate = args.releaseDate;
        }
    }
}
