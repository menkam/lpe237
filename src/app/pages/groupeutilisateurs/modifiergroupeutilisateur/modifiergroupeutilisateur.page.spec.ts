import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifiergroupeutilisateurPage } from './modifiergroupeutilisateur.page';

describe('ModifiergroupeutilisateurPage', () => {
  let component: ModifiergroupeutilisateurPage;
  let fixture: ComponentFixture<ModifiergroupeutilisateurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiergroupeutilisateurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifiergroupeutilisateurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
