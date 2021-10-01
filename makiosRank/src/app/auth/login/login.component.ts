import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public hide: boolean = true;
  public loginForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', Validators.required)
  });
  public submitedError: boolean;

  get user() { return this.loginForm.get('user') }

  constructor(private router: Router, private route: ActivatedRoute, private auth: AuthService) {}

  ngOnInit(): void {
    this.validateUserLogged();
  }

  login() {
    let {user, password} = this.loginForm.value;
    
    if(!this.loginForm.valid) this.submitedError = true;
    else {
      this.submitedError = false;

      this.auth.login(user, password).then(response => {
        localStorage.setItem('user', JSON.stringify(response['user']['$']['W']));
        this.router.navigate(['makios'], { relativeTo: this.route });
      });
    }
  }

  validateUserLogged() {
    this.auth.afAuth.authState.subscribe(response => {
      if(response != null) this.router.navigate(['makios'])
    })
  }
}