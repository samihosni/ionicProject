import { Component, OnInit } from '@angular/core';
import { GetDataServiceService } from '../services/get-data-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-player',
  templateUrl: './details-player.page.html',
  styleUrls: ['./details-player.page.scss'],
})
export class DetailsPlayerPage implements OnInit {
  selectedPlayer={};
  constructor(private dataSer: GetDataServiceService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.dataSer.getPlayerById( this.route.snapshot.paramMap.get('id') ).subscribe({
      next: (response) =>
      {
        console.log(response);
        this.selectedPlayer = response
      },
      error: (err) =>
      {
        console.log(err);
        
      }
    });
  }

}
