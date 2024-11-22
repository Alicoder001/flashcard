"use client";

import { Provider } from "react-redux";
import { ReactNode } from "react";
import { store } from "../../app/redux/store";

interface ReduxProviderProps {
  children: ReactNode;
}

export function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}