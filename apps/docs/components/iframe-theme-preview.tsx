"use client";

import { useRef, useEffect, useState } from "react";

interface Props {
  src: string;
  height?: string | number;
}

export default function IframeThemePreview({ src, height = 600 }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    setTheme(document.documentElement.className);

    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.className);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    function sendTheme() {
      const iframe = iframeRef.current;
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage({ theme }, window.location.origin);
      } 
    }

    iframe.addEventListener("load", sendTheme);
    sendTheme();

    return () => {
      iframe.removeEventListener("load", sendTheme);
    };
  }, [theme]);

  // Hold off rendering iframe until theme is set
  if (!theme) {
    return null; 
  }

  return (
    <iframe
      ref={iframeRef}
      src={src}
      style={{ width: "100%", height }}
      title="Preview"
    />
  );
}
