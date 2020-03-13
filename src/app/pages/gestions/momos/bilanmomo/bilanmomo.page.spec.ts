import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BilanmomoPage } from './bilanmomo.page';

describe('BilanmomoPage', () => {
  let component: BilanmomoPage;
  let fixture: ComponentFixture<BilanmomoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilanmomoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BilanmomoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
