import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
})
export class FirstPageComponent implements OnInit {
  @Output() public formCompleted = new EventEmitter<string>();

  public onSubmit(playerName: string) {
    this.formCompleted.emit(playerName);
  }
  constructor() {}
  ngOnInit(): void {}
}
