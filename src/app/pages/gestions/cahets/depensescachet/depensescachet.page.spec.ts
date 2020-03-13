import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DepensescachetPage } from './depensescachet.page';

describe('DepensescachetPage', () => {
  let component: DepensescachetPage;
  let fixture: ComponentFixture<DepensescachetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepensescachetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DepensescachetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
