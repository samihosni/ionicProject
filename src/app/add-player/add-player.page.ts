import { Component, OnInit } from '@angular/core';
import { GetDataServiceService } from '../services/get-data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.page.html',
  styleUrls: ['./add-player.page.scss'],
})
export class AddPlayerPage implements OnInit {

  constructor(private dataSer : GetDataServiceService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(v)
  {
    let newPlayer = v;
    this.dataSer.addPlayer(newPlayer).subscribe({
      next: (response) => {
        console.log('====================================');
        console.log(response)
        console.log(newPlayer)
        this.router.navigate(["/home"], {queryParams: {url: "add", id: response["name"], nom: newPlayer.nom, position: newPlayer.position}})
      },
      error: (err) => {
        console.log(err);
        
      }
    })
  }

}
