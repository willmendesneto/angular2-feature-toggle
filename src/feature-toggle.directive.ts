import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[featureToggle]'
})

export class FeatureToggleDirective implements OnInit {

  @Input() public featureToggle: string;

  private isEnabled: string;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    this.isEnabled = this.featureToggle;

    if (this.isEnabled) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
