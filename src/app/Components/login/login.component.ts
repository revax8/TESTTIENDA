import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  @Output() loginSuccess: EventEmitter<void> = new EventEmitter<void>();
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.getUsers().subscribe((users: any[]) => {
      const user = users.find(u => u.username === this.username && u.password === this.password);
      if (user) {
        // Aquí podrías agregar lógica para redireccionar al usuario autenticado
        console.log('Inicio de sesión exitoso');
        this.loginSuccess.emit();
        this.router.navigate(['/home']);
      } else {
        this.errorMessage = 'Usuario o contraseña incorrectos';
      }
    });
  }
}
