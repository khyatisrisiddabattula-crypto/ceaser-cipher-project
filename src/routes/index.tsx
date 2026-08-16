import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Caesar Cipher | Encode. Decode. Protect Your Message." },
      {
        name: "description",
        content:
          "A modern pink cryptography dashboard to encrypt and decrypt messages with the classic Caesar Cipher shift technique.",
      },
      { property: "og:title", content: "Caesar Cipher | Encode. Decode. Protect Your Message." },
      {
        property: "og:description",
        content:
          "A modern pink cryptography dashboard to encrypt and decrypt messages with the classic Caesar Cipher shift technique.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// The app itself lives in the standalone index.html / style.css / script.js
// files inside public/ so the project stays GitHub Pages ready.
function Index() {
  useEffect(() => {
    window.location.replace("/index.html");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <a href="/index.html" className="text-sm font-medium text-primary underline">
        Open Caesar Cipher
      </a>
    </div>
  );
}
