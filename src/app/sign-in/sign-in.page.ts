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
    signInForm: any;

    @ViewChild('signUpSlider') signUpSlider;

    public slideOneForm: FormGroup;
    public slideTwoForm: FormGroup;

    public submitAttempt: boolean = false;

    constructor(private router: Router, private navController: NavController, private formBuilder: FormBuilder) {

        this.slideOneForm = formBuilder.group({
            firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            age: ['', AgeValidator.isValid],
            username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')]), UsernameValidator.checkUsername],
            privacy: ['', Validators.required],
            bio: ['']
        });
        // this.signInForm = this.formBuilder.group({
        //     firstName: new FormControl(['', Validators.required, Validators.min(3)]),
        //     lastName: new FormControl(['', Validators.required, Validators.min(3)]),
        //     phoneNumber: new FormControl([null, [Validators.required, Validators.pattern(new RegExp('(99)[0-9 ]{10}'))]])
        // })
    }

    logForm() {
        console.log(this.signInForm);
    }

    next(slider) {
        slider.slideNext();
    }

    prev(slider) {
        slider.slidePrev();
    }

    save() {

        this.submitAttempt = true;

        if (!this.slideOneForm.valid) {
            this.signUpSlider.slideTo(0);
        }
        else if (!this.slideTwoForm.valid) {
            this.signUpSlider.slideTo(1);
        }
        else {
            console.log('success!');
            console.log(this.slideOneForm.value);
            console.log(this.slideTwoForm.value);
        }

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