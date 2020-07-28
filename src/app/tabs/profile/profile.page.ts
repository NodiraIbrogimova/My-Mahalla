import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-profile',
    templateUrl: 'profile.page.html',
    styleUrls: ['profile.page.scss']
})
export class ProfilePage {

    constructor(private navController: NavController) {
    }

    goToMyRequests() {
        this.navController.navigateRoot(`app/tabs/my-requests`);
    }
}
