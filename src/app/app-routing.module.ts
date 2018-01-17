import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { SettingsComponent } from './settings/settings.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'notes' },
  { path: 'notes', component: NotesComponent },
  { path: 'form', component: FormComponent },
  { path: 'settings', component: SettingsComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
