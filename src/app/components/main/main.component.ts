import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PictureService } from 'src/app/api/picture.service';
import { Picture, PictureFromPicsum } from 'src/app/models/picture.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  pictures$!: Subscription;
  allPictures: Picture[] = [];
  pictures: Picture[] = [];

  constructor(private readonly pictureService: PictureService) {}

  ngOnInit(): void {
    this.get4000Pictures();
  }

  ngOnDestroy() {
    this.pictures$.unsubscribe();
  }

  //GET PICTURE
  //Function must be divided because of api restrictions
  public get4000Pictures() {
    for (let i = 0; i < 8; i++) {
      this.get500Pictures();
    }
  }

  private get500Pictures() {
    for (let i = 1; i <= 5; i++) {
      this.pictures$ = this.pictureService
        .get100Pictures(i)
        .subscribe((pictures) => {
          this.mapPictures(pictures);
        });
    }
  }

  private mapPictures(pictures: PictureFromPicsum[]) {
    pictures.forEach((picture) => {
      const pictureToPush = {
        id: picture.id,
        photo: picture.download_url,
        text: picture.author,
      };
      this.pictures.push(pictureToPush);
      this.allPictures.push(pictureToPush);
    });
  }

  //FILTER
  public filterPictures(searchInputText: string) {
    if (searchInputText !== '') {
      this.pictures = this.allPictures.filter(
        (picture) =>
          picture.id.toString() === searchInputText ||
          picture.text.toLowerCase().includes(searchInputText.toLowerCase())
      );
    } else {
      this.pictures = this.allPictures;
    }
  }
}
