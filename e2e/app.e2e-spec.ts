import { Angular2FeatureTogglePage } from './app.po';

describe('angular2-feature-toggle App', function() {
  let page: Angular2FeatureTogglePage;

  beforeEach(() => {
    page = new Angular2FeatureTogglePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
