import { Component, OnInit } from '@angular/core';
import { isNumber } from '@ng-bootstrap/ng-bootstrap/util/util';
import { StatisticsService } from 'src/app/shared/services/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor(private ss:StatisticsService) { }

  openCarts:number = 0;
  closedCarts:number = 0;
  usedCoupons:number = 0;
  averageOrderValue:number= 0;

  start:Date = new Date();
  end:Date = new Date();

  ngOnInit(): void {
    this.ss.getNrOpenCarts().subscribe(res=>this.openCarts=res);
    this.ss.getNrClosedCarts().subscribe(res=>this.closedCarts=res);
    this.ss.getNrUsedCoupons().subscribe(res=>this.usedCoupons=res);

    
    
  }

  onTimeSpanChanged(){
    this.ss.getAverageOrderValueInTimeSpan(this.start,this.end).subscribe(res=>!isNaN(res)?this.averageOrderValue=res:0);
  }

}
