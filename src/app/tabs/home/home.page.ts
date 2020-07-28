import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {
    categories = [
        {type: 'Ecology', img: 'assets/categories-icons/ecology-category.png'},
        {type: 'Energy', img: 'assets/categories-icons/electricity-category.png'},
        {type: 'Residence', img: 'assets/categories-icons/residence-category.png'},
        {type: 'Roads', img: 'assets/categories-icons/road-category.png'},
        {type: 'Water', img: 'assets/categories-icons/water-category.png'},
        {type: 'Social', img: 'assets/categories-icons/social-category.png'},
        {type: 'Financial', img: 'assets/categories-icons/financial-category.png'},
        {type: 'Education', img: 'assets/categories-icons/education-category.png'},
    ];

    constructor(private navController: NavController) {
    }

    goToMyRequests() {
        this.navController.navigateRoot(`app/tabs/my-requests`);
    }
}
