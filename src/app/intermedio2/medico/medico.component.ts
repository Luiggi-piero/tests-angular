import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  medicos: any[] = [];

  constructor(public _medicoService: MedicoService) { }

  ngOnInit(): void {
  }

  saludarMedico(nombre: string){
    return `hola ${nombre}`;
  }
  
  obtenerMedicos(){
    this._medicoService.getMedicos().subscribe( (resp: any) => {
      this.medicos = resp;
    });
  }

}
