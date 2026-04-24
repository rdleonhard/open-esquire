"use client";

import { useEffect } from "react";

/**
 * Catches errors in the root layout. Must define its own html/body.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/global-error
 */
export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", background: "#FAFAF7" }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
            textAlign: "center",
            color: "#0f172a",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#64748b",
            }}
          >
            Error
          </p>
          <h1 style={{ marginTop: "1rem", fontSize: "1.75rem", fontWeight: 600 }}>
            Application error
          </h1>
          <p style={{ marginTop: "0.75rem", maxWidth: "24rem", fontSize: "0.875rem", lineHeight: 1.6, color: "#475569" }}>
            A critical error occurred. Please try reloading the page.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              marginTop: "1.5rem",
              borderRadius: "9999px",
              border: "none",
              background: "#0B1020",
              color: "#fff",
              padding: "0.65rem 1.5rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
