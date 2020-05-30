//import { Component } from '@angular/core';
import { Component, Input } from '@angular/core';
import { TooltipConfig } from 'ngx-bootstrap/tooltip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: TooltipConfig, useFactory: getAlertConfig }]
})

export class AppComponent {
  title = 'ProjAng-front';
  public collapsed = false;
  

} 
//ljadid


export function getAlertConfig(): TooltipConfig {
  return Object.assign(new TooltipConfig(), {
    placement: 'right',
    container: 'body'
  });
}

