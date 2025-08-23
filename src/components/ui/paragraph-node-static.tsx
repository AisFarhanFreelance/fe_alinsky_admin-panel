import { cn } from "@/lib/utils";
import type { SlateElementProps } from "platejs";
import { SlateElement } from "platejs";
import * as React from "react";

export function ParagraphElementStatic(props: SlateElementProps) {
  return (
    <SlateElement {...props} className={cn("m-0 px-0 py-1")}>
      {props.children}
    </SlateElement>
  );
}
