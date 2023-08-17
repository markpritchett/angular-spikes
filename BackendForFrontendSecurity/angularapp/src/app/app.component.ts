import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private service = inject(AuthService);
  readonly isAuthenticated$ = this.service.isAuthenticated();
  title = 'angularapp';
}
