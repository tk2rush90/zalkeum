import { Injectable } from '@angular/core';
import {ApiBaseService} from '@tk-ui/services/common/api-base.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ParsingUtil} from '@tk-ui/utils/parsing.util';
import {environment} from '../../environments/environment';

const {baseUrl} = environment;

@Injectable({
  providedIn: 'root'
})
export class HeaderService extends ApiBaseService {

  constructor(
    private http: HttpClient,
  ) {
    super('/assets', baseUrl);
  }

  /**
   * get image url as base64Url for caching
   * @param url image url
   */
  getImageAsBase64(url: string): Observable<any> {
    const extension = url.split('.').pop();

    return this.http.get(url, { responseType: 'arraybuffer' })
      .pipe(map(res => {
        const url = ParsingUtil.arrayBufferToBase64(res);

        return `data:image/${extension};base64,${url}`;
      }));
  }
}
