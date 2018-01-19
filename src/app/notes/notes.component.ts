import { Component, OnInit } from '@angular/core';
import { NotesService } from '../shared/notes.service';
import { Note } from '../shared/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes: Note[];

  constructor(private service: NotesService) { }

  ngOnInit(): void {
    this.notes = this.service.getAll();
  }

}
