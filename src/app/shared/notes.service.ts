import { Injectable } from '@angular/core';
import { Note } from './note';

Injectable();

export class NotesService {
  data: Note[] = [
    new Note('Пример заголовка №1', 'Описание первой записи', 'orange'),
    new Note('Пример заголовка №2', 'Повседневная практика показывает, что начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.', 'blue')
  ];

  getAll(): Note[] {
    return this.data;
  }

  // getById(id: number): Note {}

  // update(note: Note) {}

  create(note: Note): void {
    this.data.unshift(note);
  }

  // delete(note: Note) {}
}