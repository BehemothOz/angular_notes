import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { NotesComponent } from './notes/notes.component';

import { NotesService } from './shared/notes.service';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
