import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AgeValidator} from '../validators/age';
import {UsernameValidator} from '../validators/username';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.page.html',
    styleUrls: ['./sign-in.page.scss']
})
export class SignInPage {
    @ViewChild('signUpSlider') signUpSlider;

    public registerForm: FormGroup;
    images = ['assets/photos/logo.png', 'assets/photos/communication.png', 'assets/photos/communicate-problems.png'];

    public submitAttempt = false;

    constructor(private router: Router, private navController: NavController, private formBuilder: FormBuilder) {

        this.registerForm = formBuilder.group({
            firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            age: ['', AgeValidator.isValid],
            username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')]), UsernameValidator.checkUsername],
            bio: ['']
        });
    }

    save() {
        this.submitAttempt = true;

        if (!this.registerForm.valid) {
            console.log('Please fill the form');
        }
        else {
            console.log('success!');
            console.log(this.registerForm.value);
            this.navController.navigateRoot(`app/tabs/home`);
        }

    }
}