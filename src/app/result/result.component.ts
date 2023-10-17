import { QuestionsService } from './../questions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  personalityTrait: string = '';

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    this.personalityTrait = this.questionsService.getScore() >= 1 ? 'Introvert' : 'Extrovert'
  }
}
