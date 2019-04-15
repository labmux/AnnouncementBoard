export class Assignment {

  aid: number;
  tusername: string;
  csubject: string;
  asgname: string;
  file: any;
  weight: number;
  release: string;
  due: string;
  submissionStatus: string;
  body: string;
  grade: number;

  constructor(args?) {
    if (args) {
      this.csubject = args.csubject;
      this.aid = args.aid;
      this.asgname = args.asgname;
      this.tusername = args.tusername;
      // this.file = args.file;
      this.weight = args.weight;
      this.due = args.due;
      this.release = args.release;

    }
  }
}
