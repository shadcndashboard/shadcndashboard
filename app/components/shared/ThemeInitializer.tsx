"use client";

import React from "react";

export function ThemeInitializer() {
    const scriptContent = `
    (function() {
      try {
        var root = document.documentElement;
        root.setAttribute("dir", "ltr");
        root.setAttribute("data-color-theme", "CUSTOM_THEME");
        root.setAttribute("data-layout", "vertical");
        root.setAttribute("data-boxed-layout", "boxed");
        root.setAttribute("data-sidebar-type", "false");
        root.setAttribute("data-card-shadow", "false");
        root.classList.add("style-lyra");
      } catch (e) {
        console.error("ThemeInitializer error:", e);
      }
    })();
  `;

    return <script dangerouslySetInnerHTML={{ __html: scriptContent }} />;
}
