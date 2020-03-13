import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnregistrerPage } from './enregistrer.page';

describe('EnregistrerPage', () => {
  let component: EnregistrerPage;
  let fixture: ComponentFixture<EnregistrerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnregistrerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnregistrerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
