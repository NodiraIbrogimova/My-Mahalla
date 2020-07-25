import {Component, OnInit} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';

import {PhotoService} from '../../services/photo.service';

@Component({
    selector: 'app-add-request',
    templateUrl: 'add-request.page.html',
    styleUrls: ['add-request.page.scss']
})
export class AddRequestPage implements OnInit {

    constructor(public photoService: PhotoService, public actionSheetController: ActionSheetController) {
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

}
