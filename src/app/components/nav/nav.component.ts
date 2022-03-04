import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Output() search: EventEmitter<string>;
  searchInputText = '';

  constructor() {
    this.search = new EventEmitter();
  }

  ngOnInit(): void {}

  public searchPicture() {
    this.search.emit(this.searchInputText);
  }
}
