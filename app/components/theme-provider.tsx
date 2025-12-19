// src/components/theme-provider.tsx
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"   // 👈 زي ما طلبت: الوضع الافتراضي Light
      enableSystem={true}    // يقدر ياخد من النظام لو حبيت بعدين
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
