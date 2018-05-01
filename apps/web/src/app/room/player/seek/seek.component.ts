import { Component, ElementRef, forwardRef, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-seek',
    templateUrl: './seek.component.html',
    styleUrls: ['./seek.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => SeekComponent),
        },
    ],
})
export class SeekComponent implements OnInit, ControlValueAccessor {
    @ViewChild('bar') public bar: ElementRef;
    public percentage: number;
    public isDisabled: boolean;
    private onChange: (_: number) => void;
    private onTouch: (_: number) => void;

    constructor() {
        this.onChange = () => { };
        this.onTouch = () => { };
        this.isDisabled = false;
    }

    public ngOnInit(): void {
        Observable.interval(5).do(() => {
        }).subscribe();
    }

    public clickSeek(e: MouseEvent): void {
        this.seek(e);
    }

    public dragSeek(e: MouseEvent): void {
        if (e.buttons > 0) {
            this.seek(e);
        }
    }

    public writeValue(obj: number): void {
        if (!obj || isNaN(obj)) {
            return;
        }

        this.percentage = obj;
    }

    public registerOnChange(fn: (_: number) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: (_: number) => void): void {
        this.onTouch = fn;
    }

    private seek(e: MouseEvent): void {
        if (this.isDisabled) {
            return;
        }

        const totalX = this.bar.nativeElement.scrollWidth;
        const currentX = e.offsetX;
        this.percentage = ((currentX / totalX) * 100);
        this.onChange(this.percentage);
    }

    public setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

}
