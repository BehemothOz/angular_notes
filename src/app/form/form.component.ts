import { Component, OnInit } from '@angular/core';
import { NotesService } from '../shared/notes.service';
import { Note } from '../shared/note';

import { Router } from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  constructor(private service: NotesService, private router: Router) { }

  ngOnInit() {
  }

  onSave(title: string, desc: string): void {
    console.log(new Note(title, desc));
    this.service.create(new Note(title, desc));
    console.log(this.service.getAll());
    this.goToNotes();
  }

  onCancel(): void {
    this.goToNotes();
  }

  goToNotes(): void {
    this.router.navigate(['..']);
  }
}
