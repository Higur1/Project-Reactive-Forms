import { NgModule } from "@angular/core";

import { AngularMaterialModule } from "../angular-material/angular-material-module";
import { PipesModule } from "../pipes/pipes-module";
import { UsersList } from './users-list/users-list';
import { CommonModule } from "@angular/common";
import { GeneralInformations } from './general-informations/general-informations';

@NgModule({
    declarations: [
        UsersList,
        GeneralInformations
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