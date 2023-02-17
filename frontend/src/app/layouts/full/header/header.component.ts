import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { User } from 'src/app/models/user.model';
import {FormBuilder, FormControl} from '@angular/forms';
import { Login } from 'src/app/models/login.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {
  email!: string;
  password!: string;

  form: Login = {
    email: '',
    password: '',
  }
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  isAdmin: boolean = false;
  isModerator: boolean = false;
  user: any = {};
  role: string | null = '';
  avatar: string | null = '';

  constructor (
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
  ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.role = this.tokenStorage.getRole();
      if (this.role === 'admin') {
        this.isAdmin = true;
        this.isModerator = true;
      }
      if (this.role === 'moderator') {
        this.isModerator = true;
      }
      this.user = this.tokenStorage.getUser();
      this.avatar = this.tokenStorage.getAvatar();            
    }
  }

  onSubmit(): void {
    const {email, password} = this.form;
    this.authService.login(password, email).subscribe({
      next: (data) => {
        const fullname = `${data.message.lastName} ${data.message.firstName}`
        this.tokenStorage.saveToken(data.message.token);
        this.tokenStorage.saveUser(fullname);
        this.tokenStorage.saveRole(data.message.role);
        this.tokenStorage.saveAvatar(data.message.avatar);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        window.location.reload();
      },
      error: (err) => {
        this.isLoginFailed = true;
        this.errorMessage = err.error.message;
      }
    })
  }

  logOut(): void {
    this.tokenStorage.logout();
    window.location.reload();
  }
}