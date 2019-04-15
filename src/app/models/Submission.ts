import {Assignment} from './Assignment';

export class Submission {
  // Database params
  sid: number;    // submission id
  stid: number;   // student id
  asgid: number;  // assignment id
  asgname: string;
  susername: string;
  submission: string;
  reada: string;
  statussub: string;
  statusDate: string;
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
      this.reada = ( args.reada = '1') ? 'Read' : 'Not Read';
      this.statussub = ( args.statussub = '1') ? 'Submitted' : 'Not Submitted';
      this.statusDate = args.statusDate;
      this.grade = args.grade;
    }
  }
}
