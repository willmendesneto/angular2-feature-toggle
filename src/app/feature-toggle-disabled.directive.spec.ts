/* tslint:disable:no-unused-variable */

import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { FeatureToggleDirective } from './feature-toggle.directive';

@Component({
  selector: 'kp-container',
  template: `<div *kpFeatureToggle="false">Feature toggle enabled</div>`,
  directives: [FeatureToggleDirective]
})
export class ContainerComponent {}

describe('Directive: FeatureToggle', () => {

  let fixture;

  describe('When featureToggle is enabled', () => {

    beforeEach(() => {
      fixture = TestBed.configureTestingModule({
        declarations: [ ContainerComponent, FeatureToggleDirective]
      })
      .createComponent(ContainerComponent);
      fixture.detectChanges();
    });

    it('should render the component content', async(() => {
      expect(fixture.nativeElement.querySelector('div')).toBe(null);
    }));
  });

});
