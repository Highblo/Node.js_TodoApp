import { ReactNode } from "react";

export type listType = {
  icon: ReactNode;
  text: string;
  url: string;
};

export type ButtonType = {
  url: string;
  children: ReactNode;
  css: string;
}