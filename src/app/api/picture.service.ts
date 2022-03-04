import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PictureFromPicsum } from '../models/picture.interface';

@Injectable({
  providedIn: 'root',
})
export class PictureService {
  baseUrl = 'https://picsum.photos/';
  constructor(private readonly http: HttpClient) {}

  //100 is the max number of pictures you can take from the backend in one call
  //I'm calling to this endpoint because is the most optimal way
  public get100Pictures(page: number): Observable<PictureFromPicsum[]> {
    return this.http.get<PictureFromPicsum[]>(
      `${this.baseUrl}v2/list?page=${page}&limit=1000`
    );
  }
}
