import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuSegundoComponenteComponent } from './meu-segundo-componente.component';

describe('MeuSegundoComponenteComponent', () => {
  let component: MeuSegundoComponenteComponent;
  let fixture: ComponentFixture<MeuSegundoComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuSegundoComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuSegundoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
