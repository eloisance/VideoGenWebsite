import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';

import {
    VideoGenWebsiteSharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        VideoGenWebsiteSharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        VideoGenWebsiteSharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class VideoGenWebsiteSharedCommonModule {
    constructor() {
        registerLocaleData(locale);
    }
}
