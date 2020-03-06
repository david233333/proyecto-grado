import { DiagnosticoService } from '../../infraestructure/diagnosticos/diagnosticos.service';
import { Component, OnInit } from '@angular/core';
import { DominiosService } from '../../infraestructure/dominios/dominios.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent  {
 
  Vdominios: any[] = [];
  Vdiagnosticos: any[] = [];
  Vcaracteristicas:any[] =[];
  Vdefinicion :string; 
 
 
   constructor(private dominios:DominiosService, 
   private diagnostico: DiagnosticoService) { 

    }
 
   ngOnInit() {
     this.Dominios();
   }
 
   Dominios(){    
      this.dominios.getDominios().subscribe(data=>{ 
      this.Vdominios = data;    
    })
    }
   
    diagnosticos(domainName:string){
     this.diagnostico.getDiganosticos(domainName).subscribe(data=>{ 
       this.Vdiagnosticos = data;
    })
   }
  
   mandar(nombre:string){
     this.diagnosticos(nombre);
   }
   
   mandar2(diagno){
     this.Vdefinicion = diagno.diagnosticDefinition;
     this.Vcaracteristicas = diagno.caracteristicsList;
   }
   
  } 


