import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isLogged: boolean;

  constructor(private router: Router, private route: ActivatedRoute, private auth: AuthService) {}

  ngOnInit(): void {}

  goToLogin() {
    this.router.navigate(['/iniciar-sesion'], { relativeTo: this.route });
  }

  logOut() {
    localStorage.removeItem('user');
    this.auth.logOut();
    this.router.navigate(['/iniciar-sesion'], { relativeTo: this.route });
  }
}