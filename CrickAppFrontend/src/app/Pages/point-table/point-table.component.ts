import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../Services/api-call.service';

@Component({
  selector: 'app-point-table',
  standalone: true,
  imports: [],
  templateUrl: './point-table.component.html',
  styleUrl: './point-table.component.css'
})
export class PointTableComponent implements OnInit
{
  pointTable:any
  tableHeading:any
  constructor(private api:ApiCallService){}
  ngOnInit(): void 
  {
    this.api.getPointTable().subscribe(
      {
        next:data=>
        {
          this.pointTable=data;
         // console.log(this.pointTable)
          this.tableHeading=[...this.pointTable[0]]
        },
        error:error=>
        {
          console.log(error)
        }
      }
    )
  
  }

}
