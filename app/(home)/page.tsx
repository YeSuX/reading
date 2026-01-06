import Link from "next/link";
import { source } from "@/lib/source";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, ArrowRight } from "lucide-react";

export default function HomePage() {
  // 获取所有书籍（根级别的页面）
  const allPages = source.getPages();
  const books = allPages.filter((page) => page.slugs.length === 1);

  // 统计信息
  const totalBooks = books.length;
  const totalChapters = allPages.filter((page) => page.slugs.length > 1).length;

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* 页面头部 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          我的读书笔记
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          记录阅读的点滴，沉淀思考的碎片
        </p>

        {/* 统计卡片 */}
        <div className="flex justify-center gap-6 mt-8">
          <div className="flex items-center gap-2">
            <BookOpen className="size-5 text-primary" />
            <div className="text-left">
              <div className="text-2xl font-bold">{totalBooks}</div>
              <div className="text-sm text-muted-foreground">本书籍</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FileText className="size-5 text-primary" />
            <div className="text-left">
              <div className="text-2xl font-bold">{totalChapters}</div>
              <div className="text-sm text-muted-foreground">篇笔记</div>
            </div>
          </div>
        </div>
      </div>

      {/* 书籍列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => {
          // 获取该书籍下的所有章节
          const chapters = allPages.filter(
            (page) => page.slugs.length > 1 && page.slugs[0] === book.slugs[0]
          );

          return (
            <Card key={book.url} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <BookOpen className="size-5 text-primary" />
                  <Badge variant="secondary">{chapters.length} 章节</Badge>
                </div>
                <CardTitle className="text-xl">{book.data.title}</CardTitle>
                {book.data.description && (
                  <CardDescription className="line-clamp-2">
                    {book.data.description}
                  </CardDescription>
                )}
              </CardHeader>

              {chapters.length > 0 && (
                <CardContent>
                  <div className="space-y-1">
                    <p className="text-sm font-medium mb-2">最近章节：</p>
                    {chapters.slice(0, 3).map((chapter) => (
                      <Link
                        key={chapter.url}
                        href={chapter.url}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors truncate"
                      >
                        · {chapter.data.title}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              )}

              <CardFooter>
                <Button asChild className="w-full" variant="outline">
                  <Link href={book.url}>
                    开始阅读
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      {/* 空状态 */}
      {books.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="size-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium mb-2">还没有添加书籍</h3>
          <p className="text-muted-foreground mb-6">
            开始添加你的第一本读书笔记吧
          </p>
          <Button asChild>
            <Link href="/docs">查看文档</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
