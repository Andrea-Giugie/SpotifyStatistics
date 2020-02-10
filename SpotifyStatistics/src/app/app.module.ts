import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatButton } from "@angular/material/button";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { CanzoneComponent } from "./canzone/canzone.component";

@NgModule({
  declarations: [AppComponent, MenuComponent, CanzoneComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
