import { Component, OnInit } from '@angular/core';
import { VideoRandomService } from './video-random.service';
import { Principal } from '../shared/auth/principal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'jhi-video-random',
  templateUrl: './video-random.component.html',
  styles: [],
  providers: [VideoRandomService]
})
export class VideoRandomComponent implements OnInit {

    videoName: String;
    videoBase64: String;

    constructor(
        private router: Router,
        private principal: Principal,
        private videoRandom: VideoRandomService
    ) { }

    /**
     * Check if user is logged
     * start generate video random if yes
     * redirect if not
     */
    ngOnInit() {
        if (!this.principal.isAuthenticated()) {
            this.router.navigate(['/']);
        } else {
            this.generateVideoRandom();
        }
    }

    /**
     * Call API to generate video random
     * start download it on base64 at the end
     */
    generateVideoRandom() {
        this.videoRandom.get().toPromise().then((video) => {
            console.log('generateVideoRandom ok :' + video);
            this.videoName = video.videoName;
            this.downloadVideo(this.videoName);
        }).catch((err) => {
            console.log('generateVideoRandom fail : ' + err);
        });
    }

    /**
     * Download video and get it in base 64 to display it
     * @param {String} videoName to download
     */
    downloadVideo(videoName: String) {
        this.videoRandom.download(videoName).toPromise().then((video) => {
            this.videoBase64 = video.base64;
        }).catch((err) => {
            console.log('downloadVideo fail : ' + err);
        });
    }

    /**
     * onClick retry button
     * reset var & start new generate video random
     */
    reGenerateVideoRandom() {
        this.videoName = null;
        this.videoBase64 = null;
        this.generateVideoRandom();
    }

}
