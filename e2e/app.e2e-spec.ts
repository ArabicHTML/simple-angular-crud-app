import { KidsAppPage } from './app.po';

describe('kids-app App', () => {
  let page: KidsAppPage;

  beforeEach(() => {
    page = new KidsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
