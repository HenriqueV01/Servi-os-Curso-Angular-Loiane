import { CursosService } from './../cursos/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = this.cursosService.getCursos();

  constructor(private cursosService: CursosService) { }

  onAddCurso(curso: string){
    this.cursosService.addCurso(curso);
  }

  ngOnInit(): void {
  }

}
