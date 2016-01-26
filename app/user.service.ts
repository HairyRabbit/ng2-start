import { Injectable } from 'angular2/core'

export interface User {
    id: number
    name: string
}

@Injectable()
export class UserService {
    constructor() {
        this.users = []
    }

    users: User[]

    getUsers(): Promise<User[]> {
        return Promise.resolve(this.users)
    }

    getUser(id: number): Promise<User> {
        let user: User = this.users.find(user => user.id === id)
        return Promise.resolve(user)
    }

    createUser(username: string): Promise<boolean> {
        let user = { id: +new Date(), name: username }
        this.users.push(user)
        return Promise.resolve(true)
    }

    deleteUser(user: User): Promise<boolean> {
        let idx = this.users.indexOf(user)
        this.users.splice(idx, 1)
        return Promise.resolve(true)
    }

    updateUser(user: User, username: string): Promise<boolean> {
        let idx = this.users.indexOf(user)
        this.users[idx].name = username
        return Promise.resolve(true)
    }
}
