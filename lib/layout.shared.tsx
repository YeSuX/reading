import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { NotebookPen } from "lucide-react";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "苏雄的读书笔记",
      children: (
        <div className="flex items-center gap-2">
          <NotebookPen className="size-5" />
        </div>
      ),
    },
  };
}
