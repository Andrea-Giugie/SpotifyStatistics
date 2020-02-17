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

  constructor() {}

  ngOnInit() {}
}
