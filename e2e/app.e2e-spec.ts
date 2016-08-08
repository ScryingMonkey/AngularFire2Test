import { AngularFire2TestPage } from './app.po';

describe('angular-fire2-test App', function() {
  let page: AngularFire2TestPage;

  beforeEach(() => {
    page = new AngularFire2TestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
