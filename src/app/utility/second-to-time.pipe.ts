import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'secondToTime',
})
export class SecondToTimePipe implements PipeTransform {

    public transform(value: any, args?: any): any {
        const seconds = parseInt(value, 10);

        if (isNaN(seconds)) {
            throw new Error('Need to be a number');
        }

        const time = moment().startOf('day')
            .seconds(seconds)
            .format('mm:ss');

        return time;
    }

}
