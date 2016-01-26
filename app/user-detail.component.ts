import { Component, OnInit } from 'angular2/core'
import { RouteParams, ROUTER_DIRECTIVES } from 'angular2/router'
import { User, UserService } from './user.service'

const component = {
    selector: 'user-detail',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/user-detail.component.html'
}

@Component(component)
export class UserDetailComponent implements OnInit {
    constructor(private _service: UserService
                private _params: RouteParams) {}

    user: User

    ngOnInit() {
        let id = +this._params.get('id')
        this._service.getUser(id).then(user => this.user = user)
    }
}
