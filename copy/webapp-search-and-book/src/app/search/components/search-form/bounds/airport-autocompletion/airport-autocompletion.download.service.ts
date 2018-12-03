import { Injectable, Inject } from '@angular/core';
import { HTTP_CONFIG_TOKEN, HttpConfig } from '@seco/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { shareReplay, } from 'rxjs/operators';


@Injectable()
export class AirportAutocompletionDownloadService {
  // list of CacheElement to keep the text files for autocompletion
  // and avoid sending the request twice
  cache: {[key: string]: Observable<string>} = {};

  constructor(
    private readonly http: HttpClient,
    @Inject(HTTP_CONFIG_TOKEN) private readonly config: HttpConfig
  ) {}

  /**
   * Look for the first letter in the cache, if it's not present, download the file
   * If the request is pending, do not send it again
   * If the file is present in the cache, return it (as a next of the subject)
   * @param letters Letters written in the input (ex: PA)
   * @return A subject of the raw text file
   */
  getTextFileForLetter(letters: string): Observable<string> {
    if (!letters) { return of(''); }

    const letter = letters[0].toUpperCase();

    if (!letter.match(/[A-Z]/)) { return of(''); }

    if (!this.cache[letter]) {
      this.cache[letter] = this.request(letter).pipe(
        shareReplay(1)
      );
    }

    return this.cache[letter];
  }


  request(letter: string) {
    return this.http.get(
      `${document.location.origin}/aria/resources/AIR/${this.config.language}/${letter}.txt`,
      { responseType: 'text' }
    );
  }
}
