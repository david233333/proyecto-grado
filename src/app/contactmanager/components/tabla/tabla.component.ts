import { DiagnosticoService } from './../../services/diagnosticos.service';
import { Component, OnInit } from '@angular/core';
import { DominiosService } from '../../services/dominios.service';

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
 
 
   constructor(private dominios:DominiosService, private diagnostico: DiagnosticoService) { }
 
   ngOnInit() {
     this.Dominios();
   }
 
   Dominios(){    
      this.dominios.getDominios().subscribe(data=>{ 
        this.Vdominios = data;
        console.log("son los dominios",this.Vdominios); 
        for(let i of this.Vdominios){
          
        }
    })
    }
   
    diagnosticos(domainName:string){
     this.diagnostico.getDiganosticos(domainName).subscribe(data=>{ 
       this.Vdiagnosticos = data;
       console.log("son los diagnosticos V",this.Vdiagnosticos);
    })
   }
 
   obeternerNocs(){
     
   }
 
   mandar(nombre:string){
     this.diagnosticos(nombre);
   }
   
   mandar2(diagno){
     console.log(diagno);
     this.Vdefinicion = diagno.diagnosticDefinition;
     this.Vcaracteristicas = diagno.caracteristicsList;
   }
   
  } 


