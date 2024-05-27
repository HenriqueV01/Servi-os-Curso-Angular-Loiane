import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();

  cursos: string[] = ['Angular 2', 'Java', 'Kotlin'];

  constructor() {
    console.log('curso service')
   }

  addCurso(curso: string){
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
  }

  getCursos(){
    return this.cursos;
  }

}
