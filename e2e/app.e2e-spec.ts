import { FrontcontactsPage } from './app.po';

describe('frontcontacts App', function() {
  let page: FrontcontactsPage;

  beforeEach(() => {
    page = new FrontcontactsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
