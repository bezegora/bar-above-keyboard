import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Keyboard} from '@capacitor/keyboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'untitled';
  type: string = 'text';
  public changeType() {
    Keyboard.addListener('keyboardWillShow', info => {
      console.log('keyboard will show with height:', info.keyboardHeight);
    });
    Keyboard.addListener('keyboardDidShow', info => {
      console.log('keyboard did show with height:', info.keyboardHeight);
    });
    Keyboard.addListener('keyboardWillHide', () => {
      console.log('keyboard will hide');
    });
    Keyboard.addListener('keyboardDidHide', () => {
      console.log('keyboard did hide');
    });
    this.type = 'text';
    setTimeout(() => {
      this.type = 'tel';
    }, 3000)
  }
}
