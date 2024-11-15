import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent {

  // Public Members
  public greetings: string = 'Welcome to angular-02hero';
  public imageUrl: string = 'https://example.com/image.jpg';
  public isDisabled: boolean = false;
  public btnClickedMsg!: string;

  public onBtnClick() {
    this.btnClickedMsg = 'Button clicked..!';

    // Clear the message after 3 seconds
    setTimeout(() => {
      this.btnClickedMsg = '';
    }, 1000);
  }
}
