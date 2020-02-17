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
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.canzoni = data;
      this.aggiungi("a", "a", 1, "a");
      this.aggiungi("a", "a", 1, "a");
      this.aggiungi("a", "a", 1, "a");
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
    const componentRef = this.container.createComponent(componentFactory);
  }
}
