import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BilanphotoPage } from './bilanphoto.page';

describe('BilanphotoPage', () => {
  let component: BilanphotoPage;
  let fixture: ComponentFixture<BilanphotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilanphotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BilanphotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
