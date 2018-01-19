import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { VIDEO_RANDOM_ROUTE, VideoRandomComponent } from './';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([ VIDEO_RANDOM_ROUTE ])
    ],
    declarations: [
        VideoRandomComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VideoGenWebsiteVideoRandomModule {}
