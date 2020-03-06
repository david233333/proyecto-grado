import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {FlexLayoutModule} from '@angular/flex-layout'
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { UserService } from './infraestructure/user/user.service';
import { NotesComponent } from './components/notes/notes.component';
import { NewConctactDialogComponent } from './components/new-conctact-dialog/new-conctact-dialog.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { AutoCuidadoService } from './infraestructure/respuestasAutoCuidado/auto-cuidado.service';
import { FraminghamComponent } from './components/framingham/framingham.component';
import { FraminghamService } from './infraestructure/framigham/framingham.service';
import { AlarmasComponent } from './components/alarmas/alarmas.component';
import { AlarmasService } from './infraestructure/alarmas/alarmas.service';
import { ModalAlarmaComponent } from './components/modal-alarma/modal-alarma.component';
import { DiagnosticoFinalComponent } from './components/diagnostico-final/diagnostico-final.component';
import { DominiosService } from './infraestructure/dominios/dominios.service';
import { DiagnosticoService } from './infraestructure/diagnosticos/diagnosticos.service';
import { NocsService } from './infraestructure/nocs/nocs.service';
import { mobileService } from './infraestructure/mobile/inboxMobile.service';
import { nicService } from './infraestructure/nics/nics.service';
import { DiagnosticoFinalService } from './infraestructure/diagnosticoFinal/diagnosticoFinal.service';
import { VisualizarService } from './infraestructure/visualizar.service';
import { RespuestasFinalesComponent } from './components/respuestas-finales/respuestas-finales.component';
import { respuestasFinalesServices } from './infraestructure/respuestasFinales.service';



const routes: Routes = [
  { path: '', component: ContactmanagerAppComponent,
    children: [
      { path: ':id', component: MainContentComponent },
      { path: '', component: MainContentComponent }
    ] },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [
    ContactmanagerAppComponent, 
    ToolbarComponent, 
    MainContentComponent, 
    SidenavComponent,
    NotesComponent,
    NewConctactDialogComponent, 
    TablaComponent,
    FraminghamComponent, 
    AlarmasComponent,
    ModalAlarmaComponent, 
    DiagnosticoFinalComponent, RespuestasFinalesComponent],
    
    entryComponents:[
      NewConctactDialogComponent,
      NotesComponent,
      TablaComponent,
      ModalAlarmaComponent

    ],

   providers: [UserService,AutoCuidadoService,FraminghamService,AlarmasService,DominiosService,DiagnosticoService,NocsService,mobileService,nicService,DiagnosticoFinalService,VisualizarService,respuestasFinalesServices] 
})
export class ContactmanagerModule { }
