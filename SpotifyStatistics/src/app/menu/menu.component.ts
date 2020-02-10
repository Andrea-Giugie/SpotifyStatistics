import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.sass"]
})
export class MenuComponent implements OnInit {
  public test: boolean = true;
  constructor() {}

  ngOnInit() {}
  @HostListener("window:scroll", ["$event"])
  callback(event) {
    if (window.pageYOffset > 100) this.test = false;
    else this.test = true;
  }
}
