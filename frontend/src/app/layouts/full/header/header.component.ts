import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { User } from 'src/app/models/user.model';
import {FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {
  email!: string;
  password!: string;

  form: any = {
    email: null,
    password: null,
  }
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  admin: boolean = false;
  user: any = {};

  constructor (
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
  ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      
      this.admin = this.tokenStorage.getUser().admin;
      // this.moderator = this.tokenStorage.getUser().moderator; TODO à ajouter !!!
      this.user = this.tokenStorage.getUser();      
    }
  }

  onSubmit(): void {
    const {email, password} = this.form;
    this.authService.login(email, password).subscribe({
      next: (data) => {
        
        this.tokenStorage.saveToken(data.message.token);
        this.tokenStorage.saveUser(`${data.message.lastName} ${data.message.firstName}`);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.admin = this.tokenStorage.getUser().admin;
        window.location.reload();
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    })
  }

  logOut(): void {
    this.tokenStorage.logout();
    window.location.reload();
  }
}