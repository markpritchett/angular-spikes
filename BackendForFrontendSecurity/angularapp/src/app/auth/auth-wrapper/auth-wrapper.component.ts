import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { tap } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-wrapper',
  templateUrl: './auth-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthWrapperComponent {
  private service = inject(AuthService);

  isAuthenticated$ = this.service.isAuthenticated().pipe(
    tap((isAuthenticated) => {
      if (!isAuthenticated) {
        this.service.login();
      }
    })
  );
}
