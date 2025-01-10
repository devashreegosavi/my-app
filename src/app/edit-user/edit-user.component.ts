import { Component, OnInit } from '@angular/core';
import { IdeactivateGuard } from '../services/guards/deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-user',
  standalone: false,
  
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit, IdeactivateGuard{

  ngOnInit(): void {
    
  }

  canExit(){
    if(confirm('Are you sure you want to exit?')){
      return true;
    }
    return false;
  }
}
