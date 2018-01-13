import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { VIDEO_SETUP_ROUTE, VideoSetupComponent } from './';

@NgModule({
    imports: [
        RouterModule.forChild([ VIDEO_SETUP_ROUTE ])
    ],
    declarations: [
        VideoSetupComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VideoGenWebsiteVideoSetupModule {}
