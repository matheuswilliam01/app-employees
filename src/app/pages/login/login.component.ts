import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  private router: Router;
  private auth: AuthService;

  constructor(formBuilder: FormBuilder, router: Router, auth: AuthService) {
    this.formLogin = formBuilder.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    })
    this.router = router;
    this.auth = auth;
  }

  ngOnInit(): void {
  }

  public login(): void {
    if(this.formLogin.valid) {
      let data = this.formLogin.value;
      this.auth.login(data.email, data.senha).then(() => {
        window.localStorage.setItem('token', 'true')
        this.router.navigate(['/home'])
      }).catch(() => {
        window.alert("Erro ao efetuar login!")
      });
    }
  }
  public loginGoogle(): void {
    this.auth.loginWithGoogle().then(() => {
      window.localStorage.setItem('token', 'true')
      this.router.navigate(['/home'])
    }).catch(() => {
      window.alert("Erro ao efetuar login!")
    });
  }
}
