import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestaurerapplicationPage } from './restaurerapplication.page';

describe('RestaurerapplicationPage', () => {
  let component: RestaurerapplicationPage;
  let fixture: ComponentFixture<RestaurerapplicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurerapplicationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurerapplicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
