import Script from "next/script";

/**
 * Cursor-following cat from https://github.com/adryd325/oneko.js
 * Sprite and script live in /public. Customize via data-cat on the script tag.
 */
export function Oneko() {
  return (
    <Script
      src="/oneko.js"
      strategy="afterInteractive"
      data-cat="/oneko.gif"
    />
  );
}
