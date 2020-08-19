import { Injectable } from '@angular/core';

export interface ContentInterface{
  header: string;
  headerLink: string;
  img: string;
  imgLink: string;
  lastUpdated: string;
  content: string;
  button: string;
  buttonOnClick: string;
}

@Injectable({
  providedIn: 'root'
})
export class AllContentService {

  public allContents: ContentInterface[] = [
    {
      header: 'Brain Fever Bird: Wait till you hear it speak!',
      headerLink: 'https://en.wikipedia.org/wiki/Common_hawk-cuckoo',
      img: 'assets/Common-Hawk-Cuckoo-2.jpg',
      imgLink: '/birds',
      lastUpdated: '27th May',
      content: `Brain Fever Bird: Wait till you hear it speak!
          Also called papiha...
          `,
      button: 'Continue Reading',
      buttonOnClick: 'window.location = "/birds"',
    },
    {
      header: 'Alexandrine Parakeet: Named so as it is believed that Alexander the Great took these back to Greece!',
      headerLink: 'https://en.wikipedia.org/wiki/Alexandrine_parakeet',
      img: 'assets/alexandrine.jpg',
      imgLink: '/birds',
      lastUpdated: '26th April',
      content: `Alexandrine Parakeet: Named so as it is believed that Alexander the Great took these back to Greece!
          Loves the rain.
          `,
      button: 'Continue Reading',
      buttonOnClick: 'window.location = "/birds"',
    }
    
  ];

  home = [0, 1];
  birds = [1, 0];

  constructor() {
   }

   getHomeContent(){
    const newContent = [];
    for (const i of this.home){
      newContent.push(this.allContents[i]);
    }
    return newContent;
  }

  getBirdsContent(){
    const newContent = [];
    for (const i of this.birds){
      newContent.push(this.allContents[i]);
    }
    return newContent;
  }
}