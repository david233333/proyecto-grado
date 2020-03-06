import { DiagnosticoService } from '../../infraestructure/diagnosticos/diagnosticos.service';
import { Component, OnInit } from '@angular/core';
import { DominiosService } from '../../infraestructure/dominios/dominios.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent  {
 
  listaDominios: any[] = [];
  listDiagnosticos: any[] = [];
  listCaracteristicas:any[] =[];
  definicion :string; 
 
 
   constructor(private dominios:DominiosService, 
   private diagnostico: DiagnosticoService) { 

    }
 
   ngOnInit() {
     this.Dominios();
   }
 
   Dominios(){    
      this.dominios.getDomains().subscribe(data=>{ 
      this.listaDominios = data;    
    })
    }
   
    diagnosticos(domainName:string){
     this.diagnostico.getDiganostics(domainName).subscribe(data=>{ 
       this.listDiagnosticos = data;
    })
   }
  
   obtenerDominio(nombre:string){
     this.diagnosticos(nombre);
   }
   
   obtenerDiagnostico(diagno){
     this.definicion = diagno.diagnosticDefinition;
     this.listCaracteristicas = diagno.caracteristicsList;
   }
   
  } 


