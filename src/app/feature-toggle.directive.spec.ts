/* tslint:disable:no-unused-variable */

import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { FeatureToggleDirective } from './feature-toggle.directive';

@Component({
  selector: 'kp-container',
  template: `<div *kpFeatureToggle="true">Feature toggle enabled</div>`,
})
class ContainerComponent {}

@Component({
  selector: 'kp-disabled-container',
  template: `<div *kpFeatureToggle="false">Feature toggle disabled</div>`,
})
class DisabledContainerComponent {}

describe('Directive: FeatureToggle', () => {

  let fixture;

  describe('When featureToggle is enabled', () => {

    beforeEach(() => {
      fixture = TestBed.configureTestingModule({
        declarations: [ ContainerComponent, FeatureToggleDirective]
      })
      .createComponent(ContainerComponent);
      fixture.componentInstance.isEnabled = true;
      fixture.detectChanges();
    });

    it('should render the component content', async(() => {
      expect(fixture.nativeElement.querySelector('div').innerText).toBe(`Feature toggle enabled`);
    }));
  });

  describe('When featureToggle is enabled', () => {

    beforeEach(() => {
      fixture = TestBed.configureTestingModule({
        declarations: [ DisabledContainerComponent, FeatureToggleDirective]
      })
      .createComponent(DisabledContainerComponent);
      fixture.componentInstance.isEnabled = false;
      fixture.detectChanges();
    });

    it('should NOT render the component content', async(() => {
      expect(fixture.nativeElement.querySelector('div')).toBe(null);
    }));
  });
});
