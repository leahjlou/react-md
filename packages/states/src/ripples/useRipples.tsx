import React, { ReactNode } from "react";

import { useRippleTransition } from "./reducer";
import RippleContainer from "./RippleContainer";
import { RipplesOptions, MergableRippleHandlers } from "./types";
import useRippleHandlers from "./useRippleHandlers";

interface ReturnValue<E extends HTMLElement> {
  handlers: MergableRippleHandlers<E>;
  ripples: ReactNode;
}

/**
 * A hook that will return an object containing the ripples element
 * and an object of event handlers to apply to an element to trigger
 * the ripple effects.
 */
export default function useRipples<E extends HTMLElement = HTMLElement>({
  rippleTimeout,
  rippleClassNames,
  rippleContainerClassName,
  rippleClassName,
  disableSpacebarClick,
  ...options
}: RipplesOptions<E>): ReturnValue<E> {
  const {
    create,
    state,
    release,
    entered,
    remove,
    cancel,
  } = useRippleTransition(disableSpacebarClick);
  const handlers = useRippleHandlers({
    create,
    release,
    cancel,
    ...options,
  });

  return {
    handlers,
    ripples: (
      <RippleContainer
        key="ripples"
        ripples={state}
        className={rippleContainerClassName}
        rippleClassName={rippleClassName}
        timeout={rippleTimeout}
        classNames={rippleClassNames}
        entered={entered}
        exited={remove}
      />
    ),
  };
}
