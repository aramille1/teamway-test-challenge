import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question, QuestionsService } from '../questions.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  questions: Question[] = [];
  questionIndex = 0;
  score = 0;
  count = 0;

  constructor(private questionsService: QuestionsService, private router: Router) { }

  ngOnInit() {
    this.questionsService.getQuestions().subscribe((res) => {
      this.questions = res
    })
  }

  selectAnswer(score: number) {
    if (this.count >= 2) {
      this.router.navigate(['/result'])
    }
    this.score += score;
    this.count++;
    this.questionIndex++;
    this.questionsService.updateScore(this.score)
  }
}
