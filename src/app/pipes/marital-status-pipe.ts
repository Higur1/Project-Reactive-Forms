import { Pipe, PipeTransform } from '@angular/core';
import { MaritalStatusEnum } from '../enums/marital-status.enum';

@Pipe({
  name: 'maritalStatus',
  standalone: false,
})
export class MaritalStatusPipe implements PipeTransform {

  transform(maritalStatus: number | undefined): string {
    const maritalStatusMap: {[key: number]: string} = {
      [MaritalStatusEnum.SINGLE]: 'Single',
      [MaritalStatusEnum.MARRIED]: 'Married',
      [MaritalStatusEnum.DIVORCED]: 'Diverced'
    };

    return maritalStatus ? maritalStatusMap[maritalStatus] : '';
  }

}
