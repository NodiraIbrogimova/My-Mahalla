import {Component, OnInit} from '@angular/core';
import {ActionSheetController, LoadingController, NavController} from '@ionic/angular';

import {PhotoService} from '../../services/photo.service';

@Component({
    selector: 'app-add-request',
    templateUrl: 'add-request.page.html',
    styleUrls: ['add-request.page.scss']
})
export class AddRequestPage implements OnInit {
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
    public APIKey = 'AIzaSyDO5TIdw-CnjK9UXDAIF21oEjZ3JjaLmkA';

    constructor(public photoService: PhotoService, public actionSheetController: ActionSheetController,
                public loadingController: LoadingController,
                private navController: NavController) {
    }

    ngOnInit() {
        this.photoService.loadSaved();
    }

    public async showActionSheet(photo, position) {
        const actionSheet = await this.actionSheetController.create({
            header: 'Photos',
            buttons: [{
                text: 'Delete',
                role: 'destructive',
                icon: 'trash',
                handler: () => {
                    this.photoService.deletePicture(photo, position);
                }
            }, {
                text: 'Cancel',
                icon: 'close',
                role: 'cancel',
                handler: () => {
                    // Nothing to do, action sheet is automatically closed
                }
            }]
        });
        await actionSheet.present();
    }

    goToMyRequests() {
        this.navController.navigateRoot(`app/tabs/my-requests`);
    }

    async presentLoading() {
        const loading = await this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'Please wait...',
            duration: 2000
        });
        await loading.present();

        this.goToMyRequests();

        const {role, data} = await loading.onDidDismiss();
        console.log('Loading dismissed with role:', role);
    }

}
