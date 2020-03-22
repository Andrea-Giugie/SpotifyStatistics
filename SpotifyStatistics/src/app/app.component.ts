import {
  Component,
  ViewChild,
  ComponentFactory,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef
} from "@angular/core";
import { DataService } from "./data.service";
import { CanzoneComponent } from "./canzone/canzone.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  @ViewChild("contenitore", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;

  title = "SpotifyStatistics";
  canzoni;
  redirected: boolean;
  RedirectedUrl: string;
  authCode: string;
  i: number;
  constructor(
    private dataService: DataService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.redirected = false;
  }

  ngOnInit() {
    this.authCode = "";

    if (window.location.href.indexOf("#access_token=") != -1) {
      this.RedirectedUrl = window.location.href;
      console.log("origin: " + window.location.origin);
      this.i = this.RedirectedUrl.indexOf("#access_token=") + 14;
      while (this.RedirectedUrl[this.i] != '&') {
        this.authCode += this.RedirectedUrl[this.i];
        this.i++;
      }
      console.log(this.authCode);

      this.dataService.sendGetRequest(this.authCode).subscribe((data: any) => {


        /*console.log(data);
        let id: number = 1;
        this.canzoni = data;
        data.items.forEach(canzone => {
          let link: string = "url(" + canzone.album.images[0].url + ")";
          this.aggiungi(canzone.name, canzone.artists[0].name, id, link);
          console.log();
          id++;
        });*/
      });
    }
    else {
      window.location.href = "https://accounts.spotify.com/it/authorize?response_type=token&redirect_uri=http://localhost:4200&client_id=900421d114394f56852820fcb7e31ce9&scope=user-top-read+user-read-recently-played";

    }

  }

  aggiungi(
    titolo: string,
    artista: string,
    numero: number,
    immagine: string
  ): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      CanzoneComponent
    );

    const Canzone = this.container.createComponent(componentFactory);
    Canzone.instance.titolo = titolo;
    Canzone.instance.numero = numero;
    Canzone.instance.immagine = immagine;
    Canzone.instance.artista = artista;
  }
}
