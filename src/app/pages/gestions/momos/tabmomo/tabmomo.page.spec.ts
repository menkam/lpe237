import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabmomoPage } from './tabmomo.page';

describe('TabmomoPage', () => {
  let component: TabmomoPage;
  let fixture: ComponentFixture<TabmomoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabmomoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabmomoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
