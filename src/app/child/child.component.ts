import { Component, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child',
  standalone: false,
  
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Output() buttonclicked = new EventEmitter<any>();
    handleclick(){
      this.buttonclicked.emit('button was clicked!');
    }
}
