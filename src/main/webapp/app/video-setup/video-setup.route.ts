import { Route } from '@angular/router';

import { VideoSetupComponent } from './';

export const VIDEO_SETUP_ROUTE: Route = {
    path: 'video-setup',
    component: VideoSetupComponent,
    data: {
        authorities: [],
        pageTitle: 'Video setup'
    }
};
