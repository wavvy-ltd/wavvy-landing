import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { AuthState, Logout } from '@sisitech/ngxs-auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  @Select(AuthState.isAuthenticated) isAuthenticated$!: Observable<boolean>;
  @Select(AuthState.profile) profile$!: Observable<any>;


  constructor(private store: Store, private router: Router,
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.store.dispatch(new Logout())
  }

}
