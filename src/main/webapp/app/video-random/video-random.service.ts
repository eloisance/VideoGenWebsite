import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import { SERVER_API_URL } from '../app.constants';

@Injectable()
export class VideoRandomService {

    constructor(private http: Http) { }

    get(): Observable<any> {
        return this.http.get(SERVER_API_URL + 'api/videogen/random').map((res: Response) => res.json());
    }

    download(videoName): any {
        return this.http.get(SERVER_API_URL + 'api/videogen/download/' + videoName).map((res: Response) => res.json());
    }

}
