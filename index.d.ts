import { Component, ReactNode } from "react";

interface ToastComponentProps {
  fadeInDuration?: number;
  fadeOutDuration?: number;
  opacity?: number;
  pointerEvents?: string
  position?: "bottom" | "center" | "top";
  positionValue?: number;
  textStyle?: {};
  style?: {};
}

declare module "react-native-easy-toast" {
  export interface DURATION {
    LENGTH_SHORT: number;
    FOREVER: number;
  }
  export default class Toast extends Component<ToastComponentProps> {
    show: (
      text: string | ReactNode,
      duration?: number,
      callback?: (() => void)
    ) => void;
    close: (duration?: number) => void;
  }
}
