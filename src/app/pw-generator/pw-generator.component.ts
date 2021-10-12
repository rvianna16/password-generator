import { Component } from '@angular/core';

@Component({
  selector: 'pw-generator',
  templateUrl: './pw-generator.component.html',
  styleUrls: ['./pw-generator.component.scss'],
})
export class PwGeneratorComponent {
  length: number = 1;
  includeUppercaseLetters: boolean = true;
  includeLowercaseLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  password: string = '';

  constructor() {}

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
