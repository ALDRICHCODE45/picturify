import { type ReactElement } from "react";
import "./TypingLoader.css";

export interface TypingLoaderProps {
  className?: string;
}

export function TypingLoader({ className }: TypingLoaderProps): ReactElement {
  return (
    <div className={`typing ${className}`}>
      <span className="circle scaling"></span>
      <span className="circle scaling"></span>
      <span className="circle scaling"></span>
    </div>
  );
}
