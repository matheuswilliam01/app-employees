import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.css']
})
export class ExitComponent implements OnInit {

  private router: Router;
  private auth: AuthService

  constructor(router: Router, auth: AuthService) { 
    this.router = router;
    this.auth = auth;
  }

  ngOnInit(): void {
    this.auth.logout().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login'])
    }).catch(() => {
      window.alert("Erro ao efetuar logout!")
      this.router.navigate(['/home'])
    });
  }
}
