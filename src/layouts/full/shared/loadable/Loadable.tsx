// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import { Suspense, ComponentType, FC } from 'react';
import Spinner from '../../../../views/spinner/Spinner';

// ===========================|| LOADABLE - LAZY LOADING ||=========================== //

const Loadable =
  <P extends object>(Component: ComponentType<P>): FC<P> =>
  (props: P) =>
    (
      <Suspense fallback={<Spinner />}>
        <Component {...props} />
      </Suspense>
    );

export default Loadable;
