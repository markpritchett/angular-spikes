import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private service = inject(AuthService);
  readonly user$ = this.service.user$;
}
