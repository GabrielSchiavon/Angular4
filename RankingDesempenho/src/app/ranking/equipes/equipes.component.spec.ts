import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipesComponent } from './equipes.component';

describe('EquipesComponent', () => {
  let component: EquipesComponent;
  let fixture: ComponentFixture<EquipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
