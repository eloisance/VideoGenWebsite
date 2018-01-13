import { Route } from '@angular/router';

import { VideoRandomComponent } from './';

export const VIDEO_RANDOM_ROUTE: Route = {
    path: 'video-random',
    component: VideoRandomComponent,
    data: {
        authorities: [],
        pageTitle: 'Video random'
    }
};
