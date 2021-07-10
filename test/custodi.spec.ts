import { custodi } from '../src';
import Cookie from 'cookie-universal';

describe('Custodi', (): void => {
  it('should get utms cookies', async (): Promise<void> => {
    custodi({
      query:
        '?utm_source=google&utm_campaign=name&utm_medium=medium&utm_content=content&utm_term=term&foo=bar&baz=foo',
    });

    const cookies = Cookie();
    const utmCookies = cookies.getAll();

    expect(utmCookies).toMatchSnapshot();
  });
});
