import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { finalize, map } from "rxjs/operators";

interface ICat {
  breeds: any[];
  categories: any[];
  id: string;
  url: string;
  width: number;
  height: number;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  cat$: Observable<ICat>;
  loading = false;

  constructor(private httpClient: HttpClient) {}

  callNewCat() {
    this.loading = true;
    this.cat$ = this.httpClient
      .get<ICat[]>("https://api.thecatapi.com/v1/images/search")
      .pipe(
        map(cats => cats[0]),
        finalize(() => (this.loading = false))
      );
  }
}
