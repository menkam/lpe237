import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabcahetPage } from './tabcahet.page';

describe('TabcahetPage', () => {
  let component: TabcahetPage;
  let fixture: ComponentFixture<TabcahetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabcahetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabcahetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
