import { Component, OnInit } from '@angular/core';
import { VideoRandomService } from './video-random.service';

@Component({
  selector: 'jhi-video-random',
  templateUrl: './video-random.component.html',
  styles: [],
  providers: [VideoRandomService]
})
export class VideoRandomComponent implements OnInit {

  constructor(private videoRandom: VideoRandomService) { }

  ngOnInit() {
    this.generateVideoRandom();
  }

  generateVideoRandom() {
      this.videoRandom.get().toPromise().then((video) => {
          console.log('generateVideoRandom ok :' + video);
      }).catch((err) => {
          console.log('generateVideoRandom fail : ' + err);
      });
  }

}
