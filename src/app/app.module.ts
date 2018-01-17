import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { NotesComponent } from './notes/notes.component';

import { NotesService } from './shared/notes.service';
import { AppRoutingModule } from './/app-routing.module';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    NotesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
