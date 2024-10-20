import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataServiceService {

  constructor(private http: HttpClient) { }

  getPlayer() 
  {
    return this.http.get("https://ionicproject-5f3d6-default-rtdb.firebaseio.com/joueurs.json")
  }

  addPlayer(newPlayer) {
    return this.http.post(
      'https://ionicproject-5f3d6-default-rtdb.firebaseio.com/joueurs.json',
      newPlayer
    );
  }

  deletePlayer(id)
  {
    return this.http.delete(`https://ionicproject-5f3d6-default-rtdb.firebaseio.com/joueurs/${id}.json`);
  }


  updatePlayer(id, newName, newPosition)
  {
    return this.http.put(`https://ionicproject-5f3d6-default-rtdb.firebaseio.com/joueurs/${id}.json`, 
      {nom: newName, position: newPosition});
  }

}
