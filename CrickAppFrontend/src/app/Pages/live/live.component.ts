import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../Services/api-call.service';
import { MatchCardComponent } from '../../components/match-card/match-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [MatchCardComponent,CommonModule],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})
export class LiveComponent implements OnInit
{
  liveMatches:any
  constructor(private api:ApiCallService)
  {
    
  }
  ngOnInit(): void 
  {
    this.loadLiveMatches();

  }
  private loadLiveMatches()
  {
    
    this.api.getLiveMatches().subscribe(
      {
        next:data=>
        {
          console.log(data)
          this.liveMatches=data
        },
        error:error=>
        {
          console.log(error);;
        }
      }
    );
    
    
  }
  

}
