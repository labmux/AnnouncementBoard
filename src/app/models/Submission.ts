import {Assignment} from './Assignment';

export class Submission {
  // Database params
  sid: number;    // submission id
  stid: number;   // student id
  asgid: number;  // assignment id
  asgname: string;
  susername: string;
  submission: string;
  sub_read: string;
  date: string;
  grade: number;

  // firstName: string;
  // lastName: string;
  // name: string;
  // assignment: Assignment;

  constructor(args?) {
    if (args) {

      this.sid = args.sid;
      this.stid = args.stid;
      this.asgid = args.asgid;
      this.asgname = args.asgname;
      this.susername = args.susername;
      this.submission = args.submission;
      this.sub_read = args.sub_read;
      this.date = args.date;
      this.grade = args.grade;
    }
  }
}
