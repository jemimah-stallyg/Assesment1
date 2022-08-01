import { Component } from '@angular/core';  
  
@Component({  
  selector: 'app-parent',  
  templateUrl: './parent.component.html',  
  styleUrls: ['./parent.component.css']  
})  
export class ParentComponent {  
  name!: string;  
  message: any;  
  sendToChild!: string;  
  
  getResponse($event: any) {  
    this.message = $event;  
  }  
  submit() {  
    this.sendToChild = this.name;  
  }  
}  