import { NgModule } from "@angular/core";

import { AngularMaterialModule } from "../angular-material/angular-material-module";
import { PipesModule } from "../pipes/pipes-module";
import { UsersList } from './users-list/users-list';

@NgModule({
    declarations: [
        UsersList
    ],
    imports: [
        AngularMaterialModule,
        PipesModule
    ],
    exports: [
        UsersList
    ]
})
export class ComponentsModule { }