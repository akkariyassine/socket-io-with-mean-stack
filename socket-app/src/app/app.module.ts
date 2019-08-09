import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DocumentListComponent } from "./document-list/document-list.component";
import { DocumentComponent } from "./document/document.component";
// ...other imports
import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";
import { FormsModule } from "@angular/forms";

const config: SocketIoConfig = { url: "http://localhost:4444", options: {} };
@NgModule({
  declarations: [AppComponent, DocumentListComponent, DocumentComponent],
  imports: [BrowserModule, SocketIoModule.forRoot(config), FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
