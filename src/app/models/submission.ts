import {Assignment} from './assignment';

export class Submission {
  // Database params
  sid: number;    // submission id
  stid: number;   // student id
  asgid: number;  // assignment id
  submission: string;
  date: string;
  grade: number;

  // firstName: string;
  // lastName: string;
  // name: string;
  // assignment: Assignment;

  constructor(args?) {
    if (args) {
    }
  }
}
