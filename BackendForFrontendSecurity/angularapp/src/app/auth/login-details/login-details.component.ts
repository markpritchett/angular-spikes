import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginDetailsComponent {
  @Input({ required: true }) initials!: string;
  @Input({ required: true }) fullName!: string;

  private service = inject(AuthService);

  logout() {
    this.service.logout();
  }
}
