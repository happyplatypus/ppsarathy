import { Component, OnInit } from '@angular/core';
import {AllContentService} from '../all-content.service';


@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.css']
})
export class BirdsComponent implements OnInit {

  
  birdsContent = null;

  constructor(public allContents: AllContentService) {
    this.birdsContent = allContents.getBirdsContent();
    console.log(this.birdsContent)
  }


  ngOnInit(): void {
  }

}


