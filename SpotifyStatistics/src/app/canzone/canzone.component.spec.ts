import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CanzoneComponent } from "./canzone.component";

describe("CanzoneComponent", () => {
  let component: CanzoneComponent;
  let fixture: ComponentFixture<CanzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CanzoneComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
