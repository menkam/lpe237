import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModaleUpdateMomoPage } from './modale-update-momo.page';

describe('ModaleUpdateMomoPage', () => {
  let component: ModaleUpdateMomoPage;
  let fixture: ComponentFixture<ModaleUpdateMomoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaleUpdateMomoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModaleUpdateMomoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
