import { Component } from '@angular/core';

import { NotificationService } from '../notification.service';

@Component({
  selector: 'pw-generator',
  templateUrl: './pw-generator.component.html',
  styleUrls: ['./pw-generator.component.scss'],
})
export class PwGeneratorComponent {
  length: number = 1;
  includeUppercaseLetters: boolean = false;
  includeLowercaseLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  password: string = '';

  constructor(private notifyService: NotificationService) {}

  showToasterSuccess() {
    if (this.password) {
      this.notifyService.showSuccess(
        'Password copied successfully !!',
        'Password Generator'
      );
    }
  }

  generatePassword() {
    const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWYXZ';
    const lowerLetters = 'abcdefghijklmnopqrstuvwyxz';
    const numbers = '1234567890';
    const symbols = '!@#$%*()';

    let validChars = '';

    if (this.includeUppercaseLetters) {
      validChars += upperLetters;
    }

    if (this.includeLowercaseLetters) {
      validChars += lowerLetters;
    }

    if (this.includeNumbers) {
      validChars += numbers;
    }

    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }

  onChangeUpperLetters() {
    this.includeUppercaseLetters = !this.includeUppercaseLetters;
  }

  onChangeLowerLetters() {
    this.includeLowercaseLetters = !this.includeLowercaseLetters;
  }

  onChangeNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
}
