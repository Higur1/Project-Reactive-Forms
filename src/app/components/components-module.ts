import { NgModule } from "@angular/core";

import { AngularMaterialModule } from "../angular-material/angular-material-module";
import { PipesModule } from "../pipes/pipes-module";
import { UsersList } from './users-list/users-list';
import { CommonModule } from "@angular/common";
import { GeneralInformations } from './general-informations/general-informations';
import { UserInfoItem } from './user-info-item/user-info-item';

@NgModule({
    declarations: [
        UsersList,
        GeneralInformations,
        UserInfoItem
    ],
    imports: [
        CommonModule,
        AngularMaterialModule,
        PipesModule
    ],
    exports: [
        UsersList,
        GeneralInformations
    ]
})
export class ComponentsModule { }