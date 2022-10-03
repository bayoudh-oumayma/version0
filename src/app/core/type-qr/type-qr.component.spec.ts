import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeQrComponent } from './type-qr.component';

describe('TypeQrComponent', () => {
  let component: TypeQrComponent;
  let fixture: ComponentFixture<TypeQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeQrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
