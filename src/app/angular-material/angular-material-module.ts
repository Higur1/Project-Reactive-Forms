import { NgModule } from "@angular/core";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatTabsModule } from "@angular/material/tabs";
import { provideNativeDateAdapter } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from "@angular/material/dialog";


@NgModule({
    imports: [
        MatCardModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatRadioModule,
        MatDatepickerModule,
        MatIconModule,
        MatButtonModule,
        MatDialogActions,
        MatDialogClose,
        MatDialogTitle,
        MatDialogContent
    ],
    exports: [
        MatCardModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatRadioModule,
        MatDatepickerModule,
        MatIconModule,
        MatButtonModule,
        MatDialogActions,
        MatDialogClose,
        MatDialogTitle,
        MatDialogContent
    ],
    providers: [provideNativeDateAdapter()]
})
export class AngularMaterialModule { }