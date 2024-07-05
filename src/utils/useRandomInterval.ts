import React from 'react';
// Utility helper for random number generation
const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;
export const useRandomInterval = (callback: () => void, minDelay: number, maxDelay:number) => {
  const timeoutId = React.useRef<ReturnType<typeof setInterval> | null>(null);
  const savedCallback = React.useRef(callback);
  React.useEffect(() => {
    savedCallback.current = callback;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback]);
  React.useEffect(() => {
    let isEnabled =
      typeof minDelay === 'number' && typeof maxDelay === 'number';
    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay);
        timeoutId.current = setTimeout(() => {
          savedCallback.current();
          handleTick();
        }, nextTickAt);
      };
      handleTick();
    }
    //@ts-ignore
    return () => clearTimeout(timeoutId.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minDelay, maxDelay]);
  const cancel = React.useCallback(function () {
    //@ts-ignore
    clearTimeout(timeoutId.current);
  }, []);
  return cancel;
};
