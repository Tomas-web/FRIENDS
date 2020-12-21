import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {RequestsService} from '../core/http/requests.service';
import {AnswersModel} from '../core/http/model/answers.model';

@Component({
  selector: 'app-session-started',
  templateUrl: './session-started.component.html',
  styleUrls: ['./session-started.component.scss']
})
export class SessionStartedComponent implements OnInit {

  question: number;
  quizAnswers: AnswersModel[];
  types: any[];

  public readonly questionAnswers1 = ['Lithuanian',
    'Chinese',
    'Mexican',
    'Italian',
    'Japanese',
    'Indian',
    'American',
    'Russian',
    'Turkish',
    'French',
    'Spanish/Portuguese',
    'Thai'];
  public readonly questionAnswers2 = ['Antakalnis',
    'Pašilaičiai',
    'Fabijoniškės',
    'Pilaitė',
    'Justiniškės',
    'Viršuliškės',
    'Šnipiškės',
    'Žirmūnai',
    'Karoliniškės',
    'Lazdynai',
    'Senamiestis',
    'Naujoji Vilnia'];

  public readonly questionAnswers3 = ['Pet friendly',
    'For the disabled'];

  public readonly questionAnswers5 = ['Fast food/Street food',
    'Bar/Pub',
    'Restaurant',
    'Pizzeria',
    'Cafe',
    'Bakery',
    'Bistro',
    'Winery'];
  quizQuestions = ['What kind of cuisine would you like to eat?', 'In which neighborhood the restaurant should be?', 'Do you have additional wishes?', 'How much money would you like to spend? (max expenses for 1 person in eur)', 'In what facility type you are interested in?'];
  answers: any[];
  form: FormGroup;
  checkboxGroup: any;
  selectedAnswers: any;
  value: number;
  incorrectValue = false;

  constructor(private router: Router, private route: ActivatedRoute, private requestsService: RequestsService) {
    this.question = 1;
    this.answers = [];
    this.selectedAnswers = {};
  }

  ngOnInit(): void {
    this.requestsService.getAnswersForQuiz().subscribe(r => {
      this.quizAnswers = r;
    });
    this.route.queryParams.subscribe(params => {
      if (!params.question) {
        this.changeQuery({question: this.question});
      }
      if (params.question == 1) {
        this.types = this.questionAnswers1;
      } else if (params.question == 2) {
        this.types = this.questionAnswers2;
      } else if (params.question == 3) {
        this.types = this.questionAnswers3;
      } else if (params.question == 4) {
        this.types = [];
      } else if (params.question == 5) {
        this.types = this.questionAnswers5;
      }

      if (!this.answers[this.question - 1]) {
        this.answers.push([]);
        this.selectedAnswers = {};
        this.changeQuery({question: this.question});
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
    } else if (this.value > 0) {
      this.incorrectValue = false;
      this.question += 1;
      this.changeQuery({question: this.question});
    } else if (this.value <= 0) {
      this.incorrectValue = true;
    }
  }

  public finishQuiz(): any {
    if (this.answers[this.question - 1].length > 0) {
      return this.router.navigate(['../result'], {relativeTo: this.route});
    }
  }

  public skipQuestion(): void {
    this.question += 1;
    this.changeQuery({question: this.question});
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
  question: number;
}
