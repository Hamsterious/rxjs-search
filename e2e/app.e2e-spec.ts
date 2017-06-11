import { RxjsSearchPage } from './app.po';

describe('rxjs-search App', () => {
  let page: RxjsSearchPage;

  beforeEach(() => {
    page = new RxjsSearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
