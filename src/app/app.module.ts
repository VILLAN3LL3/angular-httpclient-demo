import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { NgxJsonViewerModule } from "ngx-json-viewer";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, NgxJsonViewerModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
