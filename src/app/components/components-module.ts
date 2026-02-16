import { NgModule } from "@angular/core";

import { AngularMaterialModule } from "../angular-material/angular-material-module";
import { PipesModule } from "../pipes/pipes-module";
import { UsersList } from './users-list/users-list';
import { CommonModule } from "@angular/common";
import { GeneralInformations } from './general-informations/general-informations';
import { UserInfoItem } from './user-info-item/user-info-item';
import { ContactInformations } from './contact-informations/contact-informations';

@NgModule({
    declarations: [
        UsersList,
        GeneralInformations,
        UserInfoItem,
        ContactInformations
    ],
    imports: [
        CommonModule,
        AngularMaterialModule,
        PipesModule
    ],
    exports: [
        UsersList,
        GeneralInformations,
        ContactInformations
    ]
})
export class ComponentsModule { }