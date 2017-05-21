import { NG4AnimationPage } from './app.po';

describe('ng4-animation App', () => {
  let page: NG4AnimationPage;

  beforeEach(() => {
    page = new NG4AnimationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
