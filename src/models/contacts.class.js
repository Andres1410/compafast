// eslint-disable-next-line no-unused-vars
import { DESCENDS } from './descends.enum';

export class Contacts {
    name = '';
    apellido = '';
    email = '';
    user = '';
    descend = 'DESCENDS.NORMAL';

    constructor(name, apellido, email, completed, descend) {
        this.name = name;
        this.apellido = apellido;
        this.email = email;
        this.user = completed;
        this.descend = descend
    }
}