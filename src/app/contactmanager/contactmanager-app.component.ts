import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contactmanager-app',
  template: `<app-sidenav></app-sidenav>`,
})
export class ContactmanagerAppComponent implements OnInit {

  constructor(iconResgistry: MatIconRegistry,sanitizer:DomSanitizer) {
    iconResgistry.addSvgIconSet(
      sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'));
   }

  ngOnInit() {
  }

}
