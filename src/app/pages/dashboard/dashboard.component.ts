import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  positiveCases:number;
  samplesReportedToday;
  positiveFromSamplesReported;
  totalIndividualsTested
  constructor(private http:HttpClient){

  }

  ngOnInit(){
    this.http.get(`https://api.covid19india.org/data.json`).subscribe((res:any)=>{
      console.log(res.tested[res.tested.length-1]);
      const apiData = res.tested[res.tested.length-1];
      this.positiveCases = apiData.totalpositivecases;
      this.samplesReportedToday = apiData.samplereportedtoday;
      this.totalIndividualsTested = apiData.totalindividualstested;
      this.positiveFromSamplesReported = apiData.positivecasesfromsamplesreported;
    })
  }
}
