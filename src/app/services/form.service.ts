import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FormService {

    constructor() {
    }

    saveJson(id, obj) {
        localStorage.setItem(id, JSON.stringify(obj));
    }

    getJson(id) {
        return JSON.parse(localStorage.getItem(id));
    }

    removeJson(id) {
        localStorage.removeItem(id);
    }

}
