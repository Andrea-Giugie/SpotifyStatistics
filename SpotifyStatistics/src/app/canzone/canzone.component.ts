import { Component, OnInit } from "@angular/core";

@Component({
  selector: "canzone",
  templateUrl: "./canzone.component.html",
  styleUrls: ["./canzone.component.sass"]
})
export class CanzoneComponent implements OnInit {
  public immagine: String;
  public titolo: String;
  public artista: String;
  public numero: number;

  constructor() {
    this.immagine =
      "url(https://i.scdn.co/image/ab67616d0000b273ccdb1982626f299b3b1d3efd)";
    this.titolo = "'Till I Collapse";
    this.artista = "Eminem";
    this.numero = 1;
  }
  /* constructor(
    public immagine: string = "url(https://i.scdn.co/image/ab67616d0000b273ccdb1982626f299b3b1d3efd)",
    public titolo: string = "'Till I Collapse",
    public artista: string = "Eminem",
    public numero: number = 1
  ) {}*/

  ngOnInit() {}
}
