import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { VIDEO_RANDOM_ROUTE, VideoRandomComponent } from './';

@NgModule({
    imports: [
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
