import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModaleEspecePage } from './modale-espece.page';

describe('ModaleEspecePage', () => {
  let component: ModaleEspecePage;
  let fixture: ComponentFixture<ModaleEspecePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaleEspecePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModaleEspecePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
