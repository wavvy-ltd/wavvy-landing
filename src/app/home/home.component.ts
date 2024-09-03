import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AuthState } from '@sisitech/ngxs-auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Select(AuthState.isAuthenticated) isAuthenticated$!: Observable<boolean>;
  @Select(AuthState.profile) profile$!: Observable<any>;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
