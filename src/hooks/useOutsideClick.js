import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClose(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }
      document.addEventListener("click", handleClose, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClose, listenCapturing);
    },
    [handler, listenCapturing],
  );
  return ref;
}
