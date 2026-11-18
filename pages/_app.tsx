import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/period.css';
import '../style/print.css';

import { NextComponentType } from 'next';

export default function EkSumeApp({
  Component,
  pageProps,
}: {
  Component: NextComponentType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any;
}) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
