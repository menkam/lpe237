import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonnellePage } from './personnelle.page';

describe('PersonnellePage', () => {
  let component: PersonnellePage;
  let fixture: ComponentFixture<PersonnellePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnellePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonnellePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
