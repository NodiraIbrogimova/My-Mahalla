import {Component, HostListener} from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: 'search.page.html',
    styleUrls: ['search.page.scss']
})
export class SearchPage {

    locations = [
        'Tashkent, Chilanzar district', 'St. Navoi, House 21, Bukhara', 'St. Al-Khorazmiy, House 5, Samarkand', 'St. Al-Fergani, Fergana',
        'Navoi, Navbahor tumani', 'Surkhandarya, Sariosiyo', 'Surkhandarya Region, Shargun', 'St. Nakkashlik, Chilanzar district, Tashkent',
        'Mirobod district, Tashkent', 'Yangiobod district, Tashkent', 'Tashkent Region', 'Guliston', 'Angren', 'Bekobod', 'Khiva', 'Jizzakh',
    ];

    constructor() {
    }
}
