import Script from "next/script";

export function Oneko() {
  return (
    <Script
      src="/oneko.js"
      strategy="afterInteractive"
      data-cat="/oneko.gif"
    />
  );
}
