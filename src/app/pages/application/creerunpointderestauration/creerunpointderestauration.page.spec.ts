import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreerunpointderestaurationPage } from './creerunpointderestauration.page';

describe('CreerunpointderestaurationPage', () => {
  let component: CreerunpointderestaurationPage;
  let fixture: ComponentFixture<CreerunpointderestaurationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerunpointderestaurationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreerunpointderestaurationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
