"use client";

import dynamic from "next/dynamic";

const ClientThemeProvider = dynamic(
  () => import("next-themes").then((mod) => mod.ThemeProvider),
  { ssr: false }
);

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof ClientThemeProvider>) {
  return <ClientThemeProvider {...props}>{children}</ClientThemeProvider>;
}

//Solution 2

// "use client";

// import * as React from "react";
// import {
//   ThemeProvider as NextThemesProvider,
//   ThemeProviderProps,
// } from "next-themes";

// interface Props extends ThemeProviderProps {
//   children: React.ReactNode;
// }

// export function ThemeProvider({ children, ...props }: Props) {
//   const [isMounted, setIsMounted] = React.useState(false);

//   React.useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) {
//     return null;
//   }

//   return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
// }
