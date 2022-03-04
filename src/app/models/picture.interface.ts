export interface PictureFromPicsum {
  id: number;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export interface Picture {
  id: number;
  photo: string;
  text: string;
}
