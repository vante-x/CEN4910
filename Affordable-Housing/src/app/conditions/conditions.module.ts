import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConditionsRoutingModule } from './conditions-routing.module';
import { ConditionsComponent } from './conditions.component';
import { SharedModule } from '../shared/shared.module';
import { NgParticlesModule } from 'ng-particles';

@NgModule({
  declarations: [ConditionsComponent],
  imports: [CommonModule, ConditionsRoutingModule, SharedModule, NgParticlesModule]
})
export class ConditionsModule {}