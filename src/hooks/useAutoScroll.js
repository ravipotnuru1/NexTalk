import { useEffect, useRef } from "react";

function useAutoScroll(dependencies = []) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, dependencies);

  return bottomRef;
}

export default useAutoScroll;