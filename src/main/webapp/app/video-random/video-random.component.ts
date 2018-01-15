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

    videoName: String = '...';

  constructor(
      private router: Router,
      private principal: Principal,
      private videoRandom: VideoRandomService
  ) { }

  ngOnInit() {
      if (!this.principal.isAuthenticated()) {
          this.router.navigate(['/']);
      } else {
          this.generateVideoRandom();
      }
  }

  generateVideoRandom() {
      this.videoRandom.get().toPromise().then((video) => {
          console.log('generateVideoRandom ok :' + video);
          this.videoName = video.videoName;
          this.downloadVideo(this.videoName);
      }).catch((err) => {
          console.log('generateVideoRandom fail : ' + err);
      });
  }

  downloadVideo(videoName: String) {
      this.videoRandom.download(videoName).toPromise().then((video) => {
          console.log('downloadVideo ok :' + video);
      }).catch((err) => {
          console.log('downloadVideo fail : ' + err);
      });
  }

}
