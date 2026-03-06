import { inject } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IUser } from "../../interfaces/user/user.interface";
import { PhoneList } from "../../types/phone-list";
import { AddressList } from "../../types/address-list";
import { DependentsList } from "../../types/dependents-list";
import { convertToDateObj } from "../../utils/convertToDateObj";
import { preparePhoneList } from "../../utils/prepare-phone-list";
import { PhoneTypeEnum } from "../../enums/phone-type.enum";
import { prepareAddressList } from "../../utils/prepare-address-list";
import { requiredAddressValidator } from "../../utils/user-form-validators/require-address-validator";

export class UserFormController {
    userForm!: FormGroup;

    private emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    private _fb = inject(FormBuilder);

    constructor() {
        this.createUserForm();
    }

    get generalInformations(): FormGroup {
        return this.userForm.get('generalInformations') as FormGroup;
    }

    get phoneList(): FormArray {
        return this.userForm.get('contactInformations.phoneList') as FormArray;
    }

    get addressList(): FormArray {
        return this.userForm.get('contactInformations.addressList') as FormArray;
    }

    get dependentsList(): FormArray {
        return this.userForm.get('dependentsList') as FormArray;
    }

    fulFillUserForm(user: IUser) {
        this.resetUserForm();

        this.fulFillGeneralInformations(user);

        this.fulFillPhoneList(user.phoneList);

        this.fulFillAddressList(user.addressList);

        this.fulFillDependentsList(user.dependentsList);
    }

    removeDependent(dependentIndex: number) {
        this.dependentsList.removeAt(dependentIndex);
    }

    private resetUserForm() {
        this.userForm.reset();

        this.phoneList.clear();
        this.addressList.clear();
        this.dependentsList.clear();
    }

    private fulFillGeneralInformations(user: IUser) {
        const newUser = {
            ...user,
            birthDate: convertToDateObj(user.birthDate)
        }

        this.generalInformations.patchValue(newUser);
    }

    private fulFillPhoneList(userPhoneList: PhoneList) {
        preparePhoneList(userPhoneList, false, (phone) => {
            const phoneValidators = phone.type === PhoneTypeEnum.EMERGENCY ? [] : [Validators.required];

            this.phoneList.push(this._fb.group({
                type: [phone.type],
                typeDescription: [phone.typeDescription, Validators.required],
                number: [phone.number, phoneValidators]
            }));
        });
    }

    private fulFillAddressList(userAddressList: AddressList) {
        prepareAddressList(userAddressList, false, (address) => {
            this.addressList.push(this._fb.group({
                type: [address.type],
                typeDescription: [{ value: address.typeDescription, disabled: true }],
                street: [address.street],
                complement: [address.complement],
                country: [address.country],
                state: [address.state],
                city: [address.city],
            }, {
                validators: requiredAddressValidator
            }));
        });
    }

    private fulFillDependentsList(userDependentsList: DependentsList) {
        userDependentsList.forEach((dependent) => {
            this.dependentsList.push(this._fb.group({
                name: [dependent.name, Validators.required],
                age: [dependent.age, Validators.required],
                document: [dependent.document, Validators.required],
            }));
        });
    }

    private createUserForm() {
        this.userForm = this._fb.group({
            generalInformations: this._fb.group({
                name: ['', Validators.required],
                email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
                country: ['', Validators.required],
                state: ['', Validators.required],
                maritalStatus: [null, Validators.required],
                monthlyIncome: [null, Validators.required],
                birthDate: [null, Validators.required],
            }),
            contactInformations: this._fb.group({
                phoneList: this._fb.array([]),
                addressList: this._fb.array([])
            }),
            dependentsList: this._fb.array([])
        });
    }
}