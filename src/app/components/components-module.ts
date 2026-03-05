import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { NgxMaskDirective, provideNgxMask } from "ngx-mask"

import { AngularMaterialModule } from "../angular-material/angular-material-module";
import { PipesModule } from "../pipes/pipes-module";

import { UsersList } from './users-list/users-list';
import { GeneralInformations } from './general-informations/general-informations';
import { UserInfoItem } from './user-info-item/user-info-item';
import { ContactInformations } from './contact-informations/contact-informations';
import { ContactPhoneList } from './contact-informations/components/contact-phone-list/contact-phone-list';
import { AddressGroup } from './contact-informations/components/address-group/address-group';
import { UserDependentsList } from './user-dependents-list/user-dependents-list';
import { ButtonsConteiners } from './buttons-conteiners/buttons-conteiners';
import { UserInformationsContainer } from './user-informations-container/user-informations-container';
import { GeneralInformationsEdit } from './general-informations-edit/general-informations-edit';
import { ContactInformationsEdit } from './contact-informations-edit/contact-informations-edit';
import { ContactPhoneEdit } from './contact-informations-edit/components/contact-phone-edit/contact-phone-edit';
import { AddressGroupEdit } from './contact-informations-edit/components/address-group-edit/address-group-edit';
import { UserDependentsListEdit } from './user-dependents-list-edit/user-dependents-list-edit';


@NgModule({
    declarations: [
        UsersList,
        GeneralInformations,
        UserInfoItem,
        ContactInformations,
        ContactPhoneList,
        AddressGroup,
        UserDependentsList,
        ButtonsConteiners,
        UserInformationsContainer,
        GeneralInformationsEdit,
        ContactInformationsEdit,
        ContactPhoneEdit,
        AddressGroupEdit,
        UserDependentsListEdit
    ],
    imports: [
        CommonModule,
        AngularMaterialModule,
        PipesModule,
        ReactiveFormsModule,
        NgxMaskDirective
    ],
    exports: [
        UsersList,
        GeneralInformations,
        ContactInformations,
        UserDependentsList,
        ButtonsConteiners,
        UserInformationsContainer
    ],
    providers: [
        provideNgxMask()
    ]

})
export class ComponentsModule { }