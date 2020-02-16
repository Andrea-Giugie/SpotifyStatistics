import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-canzone",
  templateUrl: "./canzone.component.html",
  styleUrls: ["./canzone.component.sass"]
})
export class CanzoneComponent implements OnInit {
  public numero: number = 1;
  public immagine: string;
  public titolo: string;
  public artista: string;
  constructor() {
    this.immagine =
      "url(https://i.scdn.co/image/ab67616d0000b273ccdb1982626f299b3b1d3efd)";
    this.titolo = "'Till I Collapse";
    this.artista = "Eminem";
  }

  ngOnInit() {}
}
