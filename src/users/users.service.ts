
import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users: User[];

    constructor(
        private httpService: HttpService
    ) {
        this.users = [
            {
                userId: 1,
                username: 'john',
                password: 'changeme',
            },
            {
                userId: 2,
                username: 'chris',
                password: 'secret',
            },
            {
                userId: 3,
                username: 'maria',
                password: 'guess',
            },
        ];
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }

     findAll(): Observable<AxiosResponse<any[]>> {
        return this.httpService.get('https://jsonplaceholder.typicode.com/users');
    }
}