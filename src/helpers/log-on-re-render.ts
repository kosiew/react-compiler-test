import { useEffect, useRef } from "react";

export const useLogOnReRender = (name: string) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      console.log(`Component ${name} initial-render`);
      isFirstRender.current = false;
    } else {
      console.log(`Component ${name} re-rendered`);
    }
  });
};
