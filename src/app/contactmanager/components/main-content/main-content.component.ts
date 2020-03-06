import { mobileService } from '../../infraestructure/mobile/inboxMobile.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../domain/models/user/entity/user';
import { UserService } from '../../infraestructure/user/user.service';
import { AutoCuidadoService } from '../../infraestructure/respuestasAutoCuidado/auto-cuidado.service';
import { Caa } from '../../domain/models/RespuestasAutocuidado/entity/caa';
import { FraminghamService } from '../../infraestructure/framigham/framingham.service';
import { framinhgam } from '../../domain/models/framingham/entity/framingham';
import { AlarmasService } from '../../infraestructure/alarmas/alarmas.service';
import { alarma } from '../../domain/models/alarmas/entity/alarmas';
import { VisualizarService } from '../../infraestructure/visualizar.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  
  user:User;
  auto:Caa;
  framig : framinhgam;
  emails: alarma;
  avatars = 'svg-1';
  visus: any[] = [];
  constructor(private route: ActivatedRoute, private service: UserService, 
    private caa: AutoCuidadoService, private frami: FraminghamService,
    private alarma: AlarmasService, private mobile: mobileService, private visu : VisualizarService
    ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      let id = params['id'];
      this.CaaById(id);
      this.framyById(id);
      this.email(id);
      this.visualizar(id);
      if(!id) id = 1
      this.user = null;

      this.service.users.subscribe(users => {
        if(users.length == 0) 
        return;

        setTimeout(() => {
          this.user = this.service.userById(id);
        }, 500);
      });

    })
  }

  CaaById(id:number){    
   let idP = id;
   let convert = id.toString();
    this.caa.getCaayById(convert)
    .subscribe(data=>{
      this.auto = data; 
  })
  }

  framyById(id:number){    
    let idP = id;
    let convert = idP.toString();
     this.frami.getFramiById(convert)
     .subscribe(data=>{
       this.framig = data;
     
   })
   }

   email(id:number){    
    let idP = id;
    let convert = idP.toString();
     this.alarma.getEmailId(convert)
     .subscribe(data=>{
       this.emails = data;
       
   })
   }

   visualizar(id:number){    
    let idP = id;
    let convert = idP.toString();
     this.visu.getId(convert)
     .subscribe(data=>{
   
       this.visus = data;
   })
   }


}
