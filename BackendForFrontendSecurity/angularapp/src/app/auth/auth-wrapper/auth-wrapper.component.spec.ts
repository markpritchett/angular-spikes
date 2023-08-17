import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthWrapperComponent } from './auth-wrapper.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthWrapperComponent', () => {
  let component: AuthWrapperComponent;
  let fixture: ComponentFixture<AuthWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AuthWrapperComponent],
    });
    fixture = TestBed.createComponent(AuthWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
