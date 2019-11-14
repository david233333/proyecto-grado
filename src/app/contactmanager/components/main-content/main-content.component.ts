import { mobileService } from './../../services/inboxMobile.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { AutoCuidadoService } from '../../services/auto-cuidado.service';
import { Caa } from '../../models/caa';
import { FraminghamService } from '../../services/framingham.service';
import { framinhgam } from '../../models/framingham';
import { AlarmasService } from '../../services/alarmas.service';
import { alarma } from '../../models/alarmas';
import { VisualizarService } from '../../services/visualizar.service';

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
      console.log("este es el caa",this.auto)  
  })
  }

  framyById(id:number){    
    let idP = id;
    let convert = idP.toString();
     this.frami.getFramiById(convert)
     .subscribe(data=>{
       this.framig = data;
       console.log("este es el framinghan",this.framig)  
   })
   }

   email(id:number){    
    let idP = id;
    let convert = idP.toString();
     this.alarma.getEmailId(convert)
     .subscribe(data=>{
       this.emails = data;
       console.log("este es el email",data)  
   })
   }

   visualizar(id:number){    
    let idP = id;
    let convert = idP.toString();
     this.visu.getId(convert)
     .subscribe(data=>{
       console.log("esta es la visualizacion",data)
       this.visus = data;
   })
   }


}
