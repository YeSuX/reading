import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { NotebookPen } from "lucide-react";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "读书笔记",
      children: <NotebookPen className="size-5 ml-2" />,
    },
  };
}
