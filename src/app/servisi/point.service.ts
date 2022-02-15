import {Injectable} from '@angular/core';
import {Location} from "@angular/common";

@Injectable({
    providedIn: 'root'
})
export class PointService {

    static w: number = 1300;
    static h: number = 500;
    static dw: number = window.screen.width;
    static dh: number = window.screen.height;
    static x: number = (PointService.dw-PointService.w)/2;
    static y: number = (PointService.dh-PointService.h)/2;

    constructor(private location: Location) {
    }


    Link(link: string, title: string = "") {
        let a = window.open(
            link,
            title,
            `_blank,
            resizable=no,
            toolbar=no,
            menubar=no,
            location=no,
            height=${PointService.h},
            width=${PointService.w},
            top=${PointService.y},
            left=${PointService.x}`);
        a?.focus();
    }

    Back() {
        this.location.back();
    }
}
