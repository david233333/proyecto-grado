import { Component, OnInit, Input } from '@angular/core';
import { DominiosService } from '../../services/dominios.service';
import { DiagnosticoService } from '../../services/diagnosticos.service';
import { NocsService } from '../../services/nocs.service';
import { nicService } from '../../services/nics.service';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, Validator } from '@angular/forms';
import { User } from '../../models/user';
import { framinhgam } from '../../models/framingham';
import { DiagnosticoFinalService } from '../../services/diagnosticoFinal.service';

@Component({
  selector: 'app-diagnostico-final',
  templateUrl: './diagnostico-final.component.html',
  styleUrls: ['./diagnostico-final.component.scss']
})
export class DiagnosticoFinalComponent implements OnInit {
  
  
 Vdominios: any[] = [];
 Vdiagnosticos: any[] = [];
 Vcaracteristicas:any[] =[];
 Vdefinicion :string; 
 VdiagnosticId : string;
 Vnoc: any[] = [];
 Vindicadores: any[] = [];
 Vnic: any[] = [];
 documento:string;
 VdiagnosticCode : string;
 nocCode:string;
 actividades: any[]=[];

 @Input() framighamV: framinhgam;


 formulario :FormGroup;

  constructor(private fb: FormBuilder,private dominios:DominiosService, 
    private diagnostico: DiagnosticoService, private nocs:NocsService, 
    private nics:nicService,private dx: DiagnosticoFinalService) { }

  ngOnInit() {
    this.Dominios();
    this.formulario= this.fb.group({
      
      documentNumber:[this.framighamV.documentNumber,[ Validators.required,Validators.required]],
      domainName: ['', [Validators.required, Validators.required]], 
      //diagnosticoCode:[this.VdiagnosticCode, [Validators.required, Validators.required]],   
      diagnostic:['', [Validators.required, Validators.required]],
      //definicion:[this.Vdefinicion, [Validators.required, Validators.required]],
      // nocCode:[this.nocCode, [Validators.required, Validators.required]],
      noc:['', [Validators.required, Validators.required]],
      nic:['', [Validators.required, Validators.required]],
    
    })
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

  obeternerNocs(id:string){
    this.nocs.getNocsById(id).subscribe(data=>{ 
      console.log("llegaron los nocs",data);
      this.Vnoc = data;
      
   })
  }

  obternerNics(id:string){
    this.nics.getNicsId(id).subscribe(data=>{ 
      this.Vnic = data;
      console.log("llegaron los nics",this.Vnic);

   })
  }

  mandar(nombre:string){
    this.diagnosticos(nombre);
    
  }
  
  mandar2(diagno){
    console.log(diagno);
    this.Vdefinicion = diagno.diagnosticDefinition;
    this.Vcaracteristicas = diagno.caracteristicsList;
    this.VdiagnosticId = diagno.diagnosticId;
    this.VdiagnosticCode = diagno.diagnosticCode;
    this.obeternerNocs(this.VdiagnosticId);
    this.obternerNics(this.VdiagnosticId);

  }
  nocMetodo(noc){
    console.log("este individual",noc)
    this.Vindicadores = noc.indicatorsList;
    this.nocCode = noc.nocCode;

  }

  guardar(){
    this.dx.EnviarFinal(this.formulario.value).subscribe(data => { 
      console.log("si se guardo el diagnostico final f",this.formulario);
      console.log("si se guardo el diagnostico final",data);
      alert("se guardo correctamente!!");
      window.location.reload()
   })   
  }

  nicMetodo(nic){
    this.actividades = nic.activitiesList;
  }



}