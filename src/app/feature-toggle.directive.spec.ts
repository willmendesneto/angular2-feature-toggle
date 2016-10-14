/* tslint:disable:no-unused-variable */

import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { FeatureToggleDirective } from './feature-toggle.directive';

@Component({
  selector: 'kp-container',
  template: `
  <div>
    <div class="feature-toggle-component" *kpFeatureToggle="true">Feature toggle enabled</div>
    <div class="feature-toggle-component" *kpFeatureToggle="false">Feature toggle disabled</div>
  </div>
  `
})
class ContainerComponent {}

describe('Directive: FeatureToggle', () => {

  let fixture;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ ContainerComponent, FeatureToggleDirective ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .createComponent(ContainerComponent);
    fixture.componentInstance.isEnabled = true;
    fixture.detectChanges();
  });

  describe('When featureToggle is enabled', () => {
    it('should render the component content', async(() => {
      expect(fixture.nativeElement.querySelectorAll('.feature-toggle-component')[0].innerText).toBe(`Feature toggle enabled`);
    }));
  });

  describe('When featureToggle is enabled', () => {
    it('should NOT render the component content', async(() => {
      expect(fixture.nativeElement.querySelectorAll('.feature-toggle-component')[1]).toBe(undefined);
    }));
  });
});
