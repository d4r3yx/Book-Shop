import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info-card-one',
  templateUrl: './info-card-one.component.html',
  styleUrls: ['./info-card-one.component.css']
})
export class InfoCardOneComponent implements OnInit {

  
  constructor (private route : ActivatedRoute , private router : Router){}

  products : any[] = [
    {id : 1 , name : 'book' },
    {id : 2 , name : 'book' },
    {id : 3 , name : 'book' },
    {id : 4 , name : 'book' },
  ]
  

  ngOnInit(): void {
    
  }
  
  onClick(id : number){
    this.router.navigate(['/cardTwo', id] )
    
  }
  
}
