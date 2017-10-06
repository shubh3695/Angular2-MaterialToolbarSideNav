import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MenudemoComponent } from './menudemo/menudemo.component';
import { SidenavdemoComponent } from './sidenavdemo/sidenavdemo.component';
import { ToolbardemoComponent } from './toolbardemo/toolbardemo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenudemoComponent,
    SidenavdemoComponent,
    ToolbardemoComponent
  ],
  imports: [
    BrowserModule, MatCardModule, MatButtonModule, MatIconModule, MatMenuModule, BrowserAnimationsModule,
    MatSidenavModule, MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
