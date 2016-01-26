import { Component, OnInit } from 'angular2/core'
import { User, UserService } from './user.service'
import { UserItemComponent } from './user-item.component'

const component = {
    selector: 'user-list',
    directives: [UserItemComponent],
    templateUrl: 'app/user-list.component.html'
}

@Component(component)
export class UserListComponent implements OnInit {
    constructor(private _service: UserService) {}

    users: User[]
    username: string = ''

    getUsersCount(): number {
        if(!this.users) return 0
        return this.users.length
    }

    createUser(): void {
        if(!this.username.trim()) return
        let resetUserName = () => this.username = ''
        this._service.createUser(this.username).then(resetUserName)
    }

    deleteUser(user: User): void {
        this._service.deleteUser(user)
    }

    updateUser(user: User, username: string): void {
        this._service.updateUser(user, username)
    }

    ngOnInit() {
        this._service.getUsers().then(users => this.users = users)
    }
}
