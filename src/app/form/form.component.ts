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

  bgTitleColor: string = 'orange';

  constructor(private service: NotesService, private router: Router) { }

  ngOnInit() {
  }

  onSave(title: string, desc: string): void {
    this.service.create(new Note(title, desc, this.bgTitleColor));
    this.goToNotes();
  }

  setBgTitleColor(colorName: string): void {
    this.bgTitleColor = colorName;
  }

  onCancel(): void {
    this.goToNotes();
  }

  goToNotes(): void {
    this.router.navigate(['..']);
  }
}
