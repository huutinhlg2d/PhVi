import urlJoin from 'url-join';

export const makeAbsolutePath = (pathname: string) => {
  return urlJoin('/', pathname);
};
