import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {FormService} from '../../services/form.service';

@Component({
    selector: 'app-profile',
    templateUrl: 'profile.page.html',
    styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {
    public formData = {firstName: null, lastName: null, age: null, username: null, bio: null};

    constructor(private navController: NavController, private formService: FormService) {
    }

    ngOnInit() {
        if (localStorage.length > 0) {
            this.formData = this.formService.getJson(1);
            console.log('profile initialized with data ', this.formData);
        } else {
            console.log('profile is read, but yet no data found');
        }
    }

    goToMyRequests() {
        this.navController.navigateRoot(`app/tabs/my-requests`);
    }
}
