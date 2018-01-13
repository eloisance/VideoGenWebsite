import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { VideoGenWebsiteSharedModule, UserRouteAccessService } from './shared';
import { VideoGenWebsiteAppRoutingModule} from './app-routing.module';
import { VideoGenWebsiteHomeModule } from './home/home.module';
import { VideoGenWebsiteVideoRandomModule } from './video-random/video-random.module';
import { VideoGenWebsiteAdminModule } from './admin/admin.module';
import { VideoGenWebsiteAccountModule } from './account/account.module';
import { VideoGenWebsiteEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        VideoGenWebsiteAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        VideoGenWebsiteSharedModule,
        VideoGenWebsiteHomeModule,
        VideoGenWebsiteVideoRandomModule,
        VideoGenWebsiteAdminModule,
        VideoGenWebsiteAccountModule,
        VideoGenWebsiteEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent,
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class VideoGenWebsiteAppModule {}
