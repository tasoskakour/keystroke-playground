import { LolappPage } from './app.po';

describe('lolapp App', function() {
  let page: LolappPage;

  beforeEach(() => {
    page = new LolappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
