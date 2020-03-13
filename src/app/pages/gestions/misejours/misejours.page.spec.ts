import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisejoursPage } from './misejours.page';

describe('MisejoursPage', () => {
  let component: MisejoursPage;
  let fixture: ComponentFixture<MisejoursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisejoursPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisejoursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
