import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FeatureToggleDirective } from './feature-toggle.directive';

const FEATURE_TOGGLE_DIRECTIVES: any[] = [
  FeatureToggleDirective
];

@NgModule({
  declarations: FEATURE_TOGGLE_DIRECTIVES,
  exports: FEATURE_TOGGLE_DIRECTIVES
})

export class FeatureToggleModule { }
