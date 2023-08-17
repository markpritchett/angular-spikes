import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDetailsComponent } from './login-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginDetailsComponent', () => {
  let component: LoginDetailsComponent;
  let fixture: ComponentFixture<LoginDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [LoginDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
