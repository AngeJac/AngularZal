import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PlayerData } from '../../services/player.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss'],
})
export class PlayerFormComponent implements OnInit, OnChanges {
  playerForm = this.formBuilder.group({
    playerName: ['', [Validators.required, Validators.minLength(5)]],
    authCode: ['', [Validators.required, Validators.minLength(5)]],
    colorPalette: 'normal',
  });
  playerNameCtrl = this.playerForm.controls.playerName;
  autCodeCtrl = this.playerForm.controls.authCode;

  @Input() playerData!: PlayerData;

  @Output() playerSubmitted = new EventEmitter();
  @Output() colorChanged = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.playerForm.controls['colorPalette'].valueChanges.subscribe((value) => {
      this.colorChanged.emit(value ?? 'normal');
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['playerData']) {
      this.playerForm.patchValue(this.playerData);
    }
  }

  onFormSubmit() {
    if (this.playerForm.valid) {
      this.playerSubmitted.emit(this.playerForm.value);
    }
  }
}
