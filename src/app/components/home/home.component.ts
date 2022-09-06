import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}

  user$ = this.authService.currentUser$;
  // user1$ = this.usersService.currentUserProfile$;

  ngOnInit(): void {}
}
