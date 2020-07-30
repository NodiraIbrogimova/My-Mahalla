import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.page.html',
    styleUrls: ['./sign-in.page.scss']
})
export class SignInPage {
    signInForm: any;

    @ViewChild('signUpSlider')

    constructor(private router: Router, private navController: NavController, private formBuilder: FormBuilder) {


        // this.signInForm = this.formBuilder.group({
        //     firstName: new FormControl(['', Validators.required, Validators.min(3)]),
        //     lastName: new FormControl(['', Validators.required, Validators.min(3)]),
        //     phoneNumber: new FormControl([null, [Validators.required, Validators.pattern(new RegExp('(99)[0-9 ]{10}'))]])
        // })
    }

    logForm() {
        console.log(this.signInForm);
    }

    prev() {

    }

    next() {

    }

    navigateToProfile() {
        // if (this.signInForm.dirty && this.signInForm.valid) {
        //     console.log('success');
        //     this.navController.navigateRoot(`app/tabs/home`);
        // }
        // console.log('error');
        this.navController.navigateRoot(`app/tabs/home`);
    }
}