import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";
import { ValidationError } from "@angular/forms/signals";

export const requiredAddressValidator: ValidatorFn = (control: AbstractControl): ValidationError | null => {
    const addressGroup = control as FormGroup;

    const controlsToCheck = Object.keys(addressGroup.controls)
        .filter((controlKey) => controlKey !== 'type' && controlKey !== 'typeDescription');

    const hasAnyText = controlsToCheck.some((controlKey) => hasText(addressGroup.get(controlKey)));

    controlsToCheck.forEach(controlKey => {
        const control = addressGroup.get(controlKey);

        if (!hasAnyText || control?.value) {
            control?.setErrors(null);
            return;
        }

        control?.setErrors({ requiredAddressValidator: true });
        control?.markAsTouched();
    });

    return null;
}

const hasText = (control: AbstractControl | null): boolean => {
    return !!control?.value?.toString().trim();
};