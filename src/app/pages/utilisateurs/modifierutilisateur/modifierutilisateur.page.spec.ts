import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifierutilisateurPage } from './modifierutilisateur.page';

describe('ModifierutilisateurPage', () => {
  let component: ModifierutilisateurPage;
  let fixture: ComponentFixture<ModifierutilisateurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierutilisateurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifierutilisateurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
