import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Answer {
  text: string,
  score: number
}

export interface Question {
  question: string,
  answers: Answer[]
}

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  score: number = 0;

  getQuestions(): Observable<any> {
    return this.http.get('./assets/data.json')
  }

  updateScore(value: number) {
    this.score = value
  }

  getScore() {
    return this.score;
  }
}
