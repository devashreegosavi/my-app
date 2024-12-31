import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-users',
  standalone: false,
  
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  user : { id: string; name: string; } = { id : '', name : ''};
  
  constructor(private router : Router, private route : ActivatedRoute){

  }

  ngOnInit(){
    this.user = {
      id : this.route.snapshot.params['id'],
      name : this.route.snapshot.params['name']
    }

    this.route.params.subscribe((data : Params) => {
      this.user = {
        id : data['id'],
        name : data['name']
      }
    })
  }
  onCategoryclick(){
    //this.router.navigateByUrl('/categories');
    //or
    this.router.navigate(['/categories']);
  }

  getRamaDetails(){
    
  }
}
