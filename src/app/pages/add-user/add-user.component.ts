import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  public formRegister: FormGroup;
  private auth: AuthService;
  private router: Router;

  constructor(formBuilder: FormBuilder, auth: AuthService, router: Router) { 
    this.formRegister = formBuilder.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    })
    this.auth = auth;
    this.router = router;
  }

  ngOnInit(): void {
  }

  public register(): void {
    if(this.formRegister.valid) {
      let data = this.formRegister.value;
      this.auth.register(data.email, data.senha).then(() => {
        window.alert("Cadastrado com sucesso!");
        this.router.navigate(["/login"]);
      }).catch(() => {
        window.alert("Erro ao efetuar cadastro!")
      });
    }
  }

}
