import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-session-started',
  templateUrl: './session-started.component.html',
  styleUrls: ['./session-started.component.scss']
})
export class SessionStartedComponent implements OnInit {

  question: number;

  types = ['Lithuanian', 'Indian', 'American', 'Lithuanian', 'Indian', 'American', 'Lithuanian', 'Indian', 'American', 'Lithuanian', 'Indian', 'American'];
  quizQuestions = ['What kind of cuisine would you like to eat?', 'In which neighborhood the restaurant should be?', 'Do you have additional wishes?', 'How much money would you like to spend? (max expenses for 1 person in eur)', 'In what facility type you are interested in?'];
  answers: any[];
  form: FormGroup;
  checkboxGroup: any;
  selectedAnswers: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.question = 1;
    this.answers = [];
    this.selectedAnswers = {};
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (!params.question) {
        this.changeQuery({question: this.question});
      }

      if (!this.answers[this.question - 1]) {
        this.answers.push([]);
        this.selectedAnswers = {};
      }

      this.checkboxGroup = new FormArray((this.types || []).map(item => new FormGroup({
        name: new FormControl(item),
        checkbox: new FormControl(!!this.selectedAnswers[item])
      })));


      this.form = new FormGroup({
        answers: this.checkboxGroup
      });
    });
  }

  public checkAnswers(): void {
    if (this.answers[this.question - 1].length > 0) {
      this.question += 1;
      this.changeQuery({question: this.question});
    }
  }

  public finishQuiz(): void {
    if (this.answers[this.question - 1].length > 0) {
      console.log('Test finished');
    }
  }

  public onClickAnswer(answer: any): any {
    const proj = this.selectedAnswers[answer];
    const projObj = this.types.filter( (p) => {
      return p === answer;
    });
    if (proj) {
      this.answers[this.question - 1].forEach((p, index) => {
        if (p === answer) {
          this.answers[this.question - 1].splice(index, 1);
        }
      });
      delete this.selectedAnswers[answer];
    } else if (projObj && projObj.length) {
      this.answers[this.question - 1].push(projObj[0]);
      this.selectedAnswers[answer] = {name: projObj[0], selected: true};
    }
  }

  private changeQuery(params: SessionQueryParams): any {
    return this.router.navigate(['.'], {relativeTo: this.route, queryParams: params});
  }

}

interface SessionQueryParams {
  question: number,
}
