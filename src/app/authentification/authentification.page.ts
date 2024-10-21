import { Component, OnInit } from '@angular/core';
import { GetDataServiceService } from '../services/get-data-service.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

  constructor(private dataSer: GetDataServiceService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  onSubmit(login, pass)
  {
    console.log('====================================');
    console.log(login);
    console.log(pass);
    console.log('====================================');

    this.dataSer.getAdmin().subscribe({
      next: (response) => {
        console.log('====================================');
        console.log(response);
        console.log('====================================');
        if(response["id_admin"]["login"] == login && response["id_admin"]["password"] == pass){
          this.router.navigateByUrl("/home")
        }
        else
        {
          this.presentAlert()
        }
      }, 
      error: (err) =>
      {
        console.log(err);
        
      }
    })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Erreur',
      message: 'Merci de vérifier votre login et mot de passe.',
      buttons: ['ok'],
    });

    await alert.present();
  }
}
