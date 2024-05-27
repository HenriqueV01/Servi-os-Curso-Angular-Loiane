import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = this.cursosService.getCursos();

  curso: string = '';

  constructor(private cursosService: CursosService) { }

  onAddCurso(curso: string){
    this.cursosService.addCurso(curso);
  }

  ngOnInit(): void {

  }

}
