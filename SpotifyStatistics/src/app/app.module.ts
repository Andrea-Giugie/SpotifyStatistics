import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { CanzoneComponent } from "./canzone/canzone.component";
import { DataService } from "./data.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, MenuComponent, CanzoneComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: [CanzoneComponent]
})
export class AppModule {}
