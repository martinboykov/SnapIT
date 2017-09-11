import { Image } from './image';

export class UserData {
    public firstName: string;
    public lastName: string;
    public username: string;
    public uploads: Array<Image>;
    public favourites: Array<Image>;

    public uid: string;
    constructor(
        public userID: string = '',
        public email: string = '',
    ) {
        this.uid = '';
        this.firstName = '';
        this.lastName = '';
        this.username = '';
    }

    get getName(): string {
        return (this.firstName && this.lastName) ? `${this.firstName} ${this.lastName}` : this.username;
    }

    static fromModel(model, target?: UserData): UserData {
        const user = target || new UserData();
        for (const prop in user) {
            if (user.hasOwnProperty(prop)) {
                user[prop] = model[prop];
            }
        }
        user.uid = model.$key || model.uid;
        return user;
    }
}
