import { TestBed } from '@angular/core/testing';

import { QuestionsService } from './questions.service';

describe('QuestionsService', () => {
  let service: QuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have an array of questions', () => {
    expect(service.questions.length).toBeGreaterThan(0);
  });

  it('should update the score when calling updateScore', () => {
    const initialValue = service.score;
    const newValue = 2;

    service.updateScore(newValue);

    expect(service.score).toBe(newValue);
    expect(service.score).not.toBe(initialValue);
  });
});
