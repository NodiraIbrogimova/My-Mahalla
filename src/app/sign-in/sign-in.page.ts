import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {LoadingController, NavController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AgeValidator} from '../validators/age';
import {UsernameValidator} from '../validators/username';
import {FormService} from '../services/form.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.page.html',
    styleUrls: ['./sign-in.page.scss']
})
export class SignInPage {
    @ViewChild('signUpSlider') signUpSlider;

    public registerForm: FormGroup;
    public submitAttempt = false;

    constructor(private router: Router, private navController: NavController, private formBuilder: FormBuilder,
                private formService: FormService, public loadingController: LoadingController) {

        if (localStorage.length > 0) {
            this.navController.navigateRoot(`app/tabs/home`)
        }
        else {
            this.registerForm = formBuilder.group({
                firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
                lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
                age: ['', AgeValidator.isValid],
                username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')]), UsernameValidator.checkUsername],
                // phoneNumber: ['', [Validators.required,
                //     Validators.pattern('^[0-9]*$'),
                //     Validators.minLength(9), Validators.maxLength(12)]],
                bio: ['']
            });
        }

    }

    save() {
        this.submitAttempt = true;

        this.formService.saveJson(1, this.registerForm.value);

        console.log('success!');
        console.log(this.registerForm.value);
        this.presentLoading().then((resolve) => {
            console.log('enters then');
            this.navController.navigateRoot(`app/tabs/home`);
        });

    }

    async presentLoading() {
        const loading = await this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'Please wait...',
            duration: 2000
        });
        await loading.present();
        const {role, data} = await loading.onDidDismiss();
        console.log('Loading dismissed!');
    }
}