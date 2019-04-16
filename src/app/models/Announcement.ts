import {Assignment} from './Assignment';

export class Announcement {
  // Database params
  aid: number;
  csubject: number;
  abody: string;
  adate: string;
  tusername: string;


  // teacher: string;
  // subject: string;
  // body: string;
  // releaseDate: string;
  constructor(args?) {
    if (args) {
       this.csubject = args.csubject;
       this.abody = args.abody;
       this.adate = args.adate;
       this.tusername = args.tusername;
    }
  }
}
