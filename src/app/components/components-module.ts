import { NgModule } from "@angular/core";

import { AngularMaterialModule } from "../angular-material/angular-material-module";
import { PipesModule } from "../pipes/pipes-module";
import { UsersList } from './users-list/users-list';
import { CommonModule } from "@angular/common";
import { GeneralInformations } from './general-informations/general-informations';
import { UserInfoItem } from './user-info-item/user-info-item';
import { ContactInformations } from './contact-informations/contact-informations';

import { ContactPhoneList } from './contact-informations/components/contact-phone-list/contact-phone-list';
import { AddressGroup } from './contact-informations/components/address-group/address-group';
import { UserDependentsList } from './user-dependents-list/user-dependents-list';
import { ButtonsConteiners } from './buttons-conteiners/buttons-conteiners';

@NgModule({
    declarations: [
        UsersList,
        GeneralInformations,
        UserInfoItem,
        ContactInformations,
        ContactPhoneList,
        AddressGroup,
        UserDependentsList,
        ButtonsConteiners
    ],
    imports: [
        CommonModule,
        AngularMaterialModule,
        PipesModule
    ],
    exports: [
        UsersList,
        GeneralInformations,
        ContactInformations,
        UserDependentsList,
         ButtonsConteiners
    ]
})
export class ComponentsModule { }