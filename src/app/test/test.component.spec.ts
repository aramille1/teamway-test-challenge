import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestComponent } from './test.component';
import { QuestionsService, Question } from '../questions.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let questionsService: QuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      providers: [QuestionsService],
      imports: [RouterTestingModule]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    questionsService = TestBed.inject(QuestionsService);

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize questions', () => {
    expect(component.questions).toEqual(questionsService.questions);
  });

  it('should assign 0 to questionIndex', () => {
    expect(component.questionIndex).toBe(0);
  });

  it('should assign 0 to score', () => {
    expect(component.score).toBe(0);
  });

  it('should increment the score and questionIndex when a method selectAnswer is called', () => {
    const initialScore = component.score;
    const initialQuestionIndex = component.questionIndex;
    const answerScore = 1;

    component.selectAnswer(answerScore);

    expect(component.score).toBe(initialScore + answerScore);
    expect(component.questionIndex).toBe(initialQuestionIndex + 1);
  });

  it('should call the questionsService.updateScore with the updated score', () => {
    spyOn(questionsService, 'updateScore');

    const answerScore = -1;

    component.selectAnswer(answerScore);

    expect(questionsService.updateScore).toHaveBeenCalledWith(component.score);
  });
});
