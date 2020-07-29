import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {SignInPage} from './sign-in.page';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';

const routes: Routes = [
    {
        path: '',
        component: SignInPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ExploreContainerComponentModule,
        RouterModule.forChild(routes)
    ],
    declarations: [SignInPage],
    providers: [FormBuilder]
})
export class SignInPageModule {
}
