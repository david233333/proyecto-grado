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
import { UserService } from './services/user.service';
import { NotesComponent } from './components/notes/notes.component';
import { NewConctactDialogComponent } from './components/new-conctact-dialog/new-conctact-dialog.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { AutoCuidadoService } from './services/auto-cuidado.service';
import { FraminghamComponent } from './components/framingham/framingham.component';
import { FraminghamService } from './services/framingham.service';
import { AlarmasComponent } from './components/alarmas/alarmas.component';
import { AlarmasService } from './services/alarmas.service';
import { ModalAlarmaComponent } from './components/modal-alarma/modal-alarma.component';
import { DiagnosticoFinalComponent } from './components/diagnostico-final/diagnostico-final.component';
import { DominiosService } from './services/dominios.service';
import { DiagnosticoService } from './services/diagnosticos.service';
import { NocsService } from './services/nocs.service';
import { mobileService } from './services/inboxMobile.service';
import { nicService } from './services/nics.service';
import { DiagnosticoFinalService } from './services/diagnosticoFinal.service';
import { VisualizarService } from './services/visualizar.service';
import { RespuestasFinalesComponent } from './components/respuestas-finales/respuestas-finales.component';
import { respuestasFinalesServices } from './services/respuestasFinales.service';



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
