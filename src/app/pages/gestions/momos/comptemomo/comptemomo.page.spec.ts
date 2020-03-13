import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComptemomoPage } from './comptemomo.page';

describe('ComptemomoPage', () => {
  let component: ComptemomoPage;
  let fixture: ComponentFixture<ComptemomoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptemomoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComptemomoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
