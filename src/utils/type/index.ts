import { PropsWithChildren } from 'react';

export type ComponentProps<T> = PropsWithChildren<T> & {
  className?: string;
};
