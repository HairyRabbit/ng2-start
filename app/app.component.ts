import { Component } from 'angular2/core'
import { RouteConfig, ROUTER_DIRECTIVES, RouteDefinition } from 'angular2/router'
import { UserListComponent } from './user-list.component'
import { UserDetailComponent } from './user-detail.component'
import { UserService } from './user.service'

const component = {
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService],
    template: `
<h1>Hello World</h1>
<router-outlet></router-outlet>
`
}

const router: RouteDefinition[] = [
    { path: '/users', name: 'UserList', component: UserListComponent, useAsDefault: true },
    { path: '/users/:id', name: 'UserDetail', component: UserDetailComponent }
]

@Component(component)
@RouteConfig(router)
export class AppComponent { }
