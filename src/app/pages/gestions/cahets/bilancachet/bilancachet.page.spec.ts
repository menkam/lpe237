import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BilancachetPage } from './bilancachet.page';

describe('BilancachetPage', () => {
  let component: BilancachetPage;
  let fixture: ComponentFixture<BilancachetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilancachetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BilancachetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
