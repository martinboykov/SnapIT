import { AppPage } from './app.po';
import { browser } from 'protractor/built';

describe('Home page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.ignoreSynchronization = true;
  });

  it('should have SnapIT as a document title.', (done) => {
    page.navigateTo('/');
    page.getDocumentTitle()
      .then((title) => {
        expect(title).toEqual('SnapIT');
        done();
      })
      .catch((err) => {
        done.fail(err);
      });
  });

  it('should not navigate to uploads when not authenticated.', (done) => {
    page.navigateTo('/')
      .then(() => {
        const uploadBtn = page.getElementById('upload-link');
        return uploadBtn.click();
      }).then(() => {
        const currentRoute = page.getCurrentRoute();
        expect(currentRoute).toEqual('http://localhost:4200/');
        done();
      })
      .catch((err) => {
        done.fail(err);
      });
  });
});
