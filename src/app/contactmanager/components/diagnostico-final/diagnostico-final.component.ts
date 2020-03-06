import { Component, OnInit, Input } from '@angular/core';
import { DominiosService } from '../../infraestructure/dominios/dominios.service';
import { DiagnosticoService } from '../../infraestructure/diagnosticos/diagnosticos.service';
import { NocsService } from '../../infraestructure/nocs/nocs.service';
import { nicService } from '../../infraestructure/nics/nics.service';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, Validator } from '@angular/forms';
import { User } from '../../domain/models/user/entity/user';
import { framinhgam } from '../../domain/models/framingham/entity/framingham';
import { DiagnosticoFinalService } from '../../infraestructure/diagnosticoFinal/diagnosticoFinal.service';

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
      diagnostic:['', [Validators.required, Validators.required]],    
      noc:['', [Validators.required, Validators.required]],
      nic:['', [Validators.required, Validators.required]],
    
    })
  }

  public Dominios(){    
     this.dominios.getDominios().subscribe(data=>{ 
       this.Vdominios = data;
   })
   }
  
   diagnosticos(domainName:string){
    this.diagnostico.getDiganosticos(domainName).subscribe(data=>{ 
      this.Vdiagnosticos = data;
   })
  }

  obeternerNocs(id:string){
    this.nocs.getNocsById(id).subscribe(data=>{ 
      this.Vnoc = data;
   })
  }

  obternerNics(id:string){
    this.nics.getNicsId(id).subscribe(data=>{ 
    this.Vnic = data;
   })
  }

  mandar(nombre:string){
    this.diagnosticos(nombre);
    
  }
  
  mandar2(diagno){
    this.Vdefinicion = diagno.diagnosticDefinition;
    this.Vcaracteristicas = diagno.caracteristicsList;
    this.VdiagnosticId = diagno.diagnosticId;
    this.VdiagnosticCode = diagno.diagnosticCode;
    this.obeternerNocs(this.VdiagnosticId);
    this.obternerNics(this.VdiagnosticId);

  }
  nocMetodo(noc){
  
    this.Vindicadores = noc.indicatorsList;
    this.nocCode = noc.nocCode;

  }

  guardar(){
    this.dx.EnviarFinal(this.formulario.value).subscribe(data => { 
      alert("se guardo correctamente!!");
      window.location.reload()
   })   
  }

  nicMetodo(nic){
    this.actividades = nic.activitiesList;
  }



}