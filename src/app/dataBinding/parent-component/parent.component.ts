import { Component, ViewChild } from '@angular/core';
import { ChildComponentComponent } from './child-component/child.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponentComponent {
  // By using ViewChild also we can access functions & methods of child component
  @ViewChild(ChildComponentComponent) child!: ChildComponentComponent;

  // Public Members
  public greetings: string = 'Welcome to angular-02hero';
  public imageUrl: string = 'https://pbs.twimg.com/profile_images/719845640193224704/nDRz_1bb_400x400.jpg';
  public imageAlt: string = 'Example image';
  public isDisabled: boolean = false;
  public btnClickedMsg!: string;

  public parentMessage = "Hello from parent component"

  public childMessage!: string;

  public onBtnClick() {
    this.btnClickedMsg = 'Button clicked..!';

    // Clear the message after 3 seconds
    setTimeout(() => {
      this.btnClickedMsg = '';
    }, 1500);
  }

  public receiveMessage(childMessage: string) {
    this.childMessage = childMessage;
    setTimeout(()=>{
      this.childMessage = ''
    }, 2000)
  }
}
