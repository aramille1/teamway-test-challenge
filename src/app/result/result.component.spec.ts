import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultComponent } from './result.component';
import { QuestionsService } from '../questions.service';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;
  let questionsService: QuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultComponent],
      providers: [QuestionsService]
    });

    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    questionsService = TestBed.inject(QuestionsService);

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize personalityTrait correctly for an Extrovert', () => {
    spyOn(questionsService, 'getScore').and.returnValue(0);
    fixture.detectChanges();
    expect(component.personalityTrait).toBe('Extrovert');
  });
});
