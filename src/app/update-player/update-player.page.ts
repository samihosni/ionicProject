import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataServiceService } from '../services/get-data-service.service';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.page.html',
  styleUrls: ['./update-player.page.scss'],
})
export class UpdatePlayerPage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private dataSer: GetDataServiceService) { }

  nom;
  position 
  id;
  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      console.log('====================================');
      console.log(data);
      console.log('====================================');
      this.id = data["id"];
      this.nom = data["nom"];
      this.position = data["position"];
    })
  }

  onUpdate(v)
  {
    console.log(v);
    this.dataSer.updatePlayer(this.id, this.nom, this.position).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(["/home"], {queryParams: { url: "update", id: this.id, nom: response["nom"], position: response["position"]}})
      },
      error: (err) => {
        console.log(err);
        
      }
    })
  }

}
