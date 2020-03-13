import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecettephotoPage } from './recettephoto.page';

describe('RecettephotoPage', () => {
  let component: RecettephotoPage;
  let fixture: ComponentFixture<RecettephotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecettephotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecettephotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
