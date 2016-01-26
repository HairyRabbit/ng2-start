import { Component, OnInit, EventEmitter, Input, Output } from 'angular2/core'
import { ROUTER_DIRECTIVES } from 'angular2/router'

const component = {
    selector: 'user-item',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/user-item.component.html'
}

@Component(component)
export class UserItemComponent implements OnInit {

    @Input()
    user

    @Output(this.user)
    updateUser = new EventEmitter<string>()

    username: string
    isEdit: boolean = false

    beginEdit() {
        this.isEdit = true
    }

    endEdit() {
        this.isEdit = false
        this.updateUser.next(this.username)
    }

    ngOnInit() {
        this.username = this.user.name
    }
}
