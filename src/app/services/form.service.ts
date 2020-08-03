import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FormService {
    public form_data = {};

    constructor() {
        console.log('service works ', this.form_data);
    }
}
