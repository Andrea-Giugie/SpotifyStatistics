import { Component } from "@angular/core";
import { DataService } from "./data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  title = "SpotifyStatistics";
  canzoni;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.canzoni = data;
    });
  }
}
