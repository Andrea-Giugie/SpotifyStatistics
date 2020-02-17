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

  constructor(
    private dataService: DataService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any) => {
      console.log(data);
      let id: number = 1;
      this.canzoni = data;
      data.items.forEach(canzone => {
        let link: string = "url(" + canzone.album.images[0].url + ")";
        this.aggiungi(canzone.name, canzone.artists[0].name, id, link);
        console.log();
        id++;
      });
    });
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
