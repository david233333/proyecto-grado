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
  
  
 listaDominios: any[] = [];
 listaDiagnosticos: any[] = [];
 listaCaracteristicas:any[] =[];
 definicion :string; 
 diagnosticId : string;
 listaNoc: any[] = [];
 listaIndicadores: any[] = [];
 listaNic: any[] = [];
 documento:string;
 diagnosticCode : string;
 nocCode:string;
 listaActividades: any[]=[];

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
     this.dominios.getDomains().subscribe(data=>{ 
       this.listaDominios = data;
   })
   }
  
   diagnosticos(domainName:string){
    this.diagnostico.getDiganostics(domainName).subscribe(data=>{ 
      this.listaDiagnosticos = data;
   })
  }

  obeternerNocs(id:string){
    this.nocs.getNocsById(id).subscribe(data=>{ 
      this.listaNoc = data;
   })
  }

  obternerNics(id:string){
    this.nics.getNicsId(id).subscribe(data=>{ 
    this.listaNic = data;
   })
  }

  obternerDominio(nombre:string){
    this.diagnosticos(nombre);
    
  }
  
  obtenerDiagnostico(diagno){
    this.definicion = diagno.diagnosticDefinition;
    this.listaCaracteristicas = diagno.caracteristicsList;
    this.diagnosticId = diagno.diagnosticId;
    this.diagnosticCode = diagno.diagnosticCode;
    this.obeternerNocs(this.diagnosticId);
    this.obternerNics(this.diagnosticId);

  }
  obtenerNoc(noc){
    this.listaIndicadores = noc.indicatorsList;
    this.nocCode = noc.nocCode;

  }

  guardarDiagnostico(){
    this.dx.sendDiagnosticFinal(this.formulario.value).subscribe(data => { 
      alert("se guardo correctamente!!");
      window.location.reload()
   })   
  }

  obtenerNic(nic){
    this.listaActividades = nic.activitiesList;
  }

}