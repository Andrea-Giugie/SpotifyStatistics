import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})

export class DataService {
  private REST_API_SERVER = "/assets/data/test.json";
  url: string = "https://accounts.spotify.com/it/authorize?response_type=token&redirect_uri=https://andreagiugie.it:4200/&client_id=900421d114394f56852820fcb7e31ce9&scope=user-top-read+user-read-recently-played";


  constructor(private httpClient: HttpClient) { }
  public sendGetRequest(auth) {

    return this.httpClient.get(this.REST_API_SERVER);
  }
}
