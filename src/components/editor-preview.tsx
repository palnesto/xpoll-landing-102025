import { cn } from "@/lib/utils";

export const RichTextPreview = ({ content }: { content: string }) => {
  const transformedContent = content?.replace(/<p><\/p>/g, "<br />");
  return (
    <div
      className={cn(
        "prose dark:prose-invert max-w-full text-black bg-white",
        "rounded-lg bg-[#f6f5f5] p-4 mt-4",
        "[&>*:first-child]:mt-0",
        "[&>*:last-child]:mb-0"
      )}
      dangerouslySetInnerHTML={{ __html: transformedContent }}
    />
  );
};
