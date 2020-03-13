import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DepensephotoPage } from './depensephoto.page';

describe('DepensephotoPage', () => {
  let component: DepensephotoPage;
  let fixture: ComponentFixture<DepensephotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepensephotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DepensephotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
