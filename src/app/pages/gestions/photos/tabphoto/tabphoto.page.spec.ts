import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabphotoPage } from './tabphoto.page';

describe('TabphotoPage', () => {
  let component: TabphotoPage;
  let fixture: ComponentFixture<TabphotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabphotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabphotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
