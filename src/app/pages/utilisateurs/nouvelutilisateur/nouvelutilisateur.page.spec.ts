import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NouvelutilisateurPage } from './nouvelutilisateur.page';

describe('NouvelutilisateurPage', () => {
  let component: NouvelutilisateurPage;
  let fixture: ComponentFixture<NouvelutilisateurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouvelutilisateurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NouvelutilisateurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
