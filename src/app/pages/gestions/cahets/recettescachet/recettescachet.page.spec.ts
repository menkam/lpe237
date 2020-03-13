import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecettescachetPage } from './recettescachet.page';

describe('RecettescachetPage', () => {
  let component: RecettescachetPage;
  let fixture: ComponentFixture<RecettescachetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecettescachetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecettescachetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
