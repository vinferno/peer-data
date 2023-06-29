import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevListComponent } from './components/dev-list/dev-list.component';
import { DevDetailComponent } from './components/dev-detail/dev-detail.component';
import { RoundListComponent } from './components/round-list/round-list.component';
import { RoundDetailComponent } from './components/round-detail/round-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DevListComponent,
    DevDetailComponent,
    RoundListComponent,
    RoundDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
