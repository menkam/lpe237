import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NouvelgroupeutilisateurPage } from './nouvelgroupeutilisateur.page';

describe('NouvelgroupeutilisateurPage', () => {
  let component: NouvelgroupeutilisateurPage;
  let fixture: ComponentFixture<NouvelgroupeutilisateurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouvelgroupeutilisateurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NouvelgroupeutilisateurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
