export type ParagraphBlock = { type: "p"; text: string; className?: string };
export type ImageBlock = { type: "img"; src: string; alt?: string; className?: string };
export type ContentBlock = ParagraphBlock | ImageBlock;

type ContentRendererProps = {
  blocks: ContentBlock[];
};

export default function ContentRenderer({ blocks }: ContentRendererProps) {
  return (
    <div className="flex flex-col gap-3">
      {blocks.map((block, idx) => {
        if (block.type === "p") {
          const pClass = [
            "text-sm leading-relaxed break-words",
            block.className || "",
          ].join(" ").trim();
          return (
            <p
              key={`p-${block.text.slice(0, 30)}-${idx}`}
              className={pClass}
              style={{ overflowWrap: "anywhere", wordBreak: "break-word" }}
            >
              {block.text}
            </p>
          );
        }
        if (block.type === "img") {
          const imgClass = ["rounded", block.className || ""].join(" ").trim();
          return (
            <img
              key={`img-${block.src}`}
              src={block.src}
              alt={block.alt || ""}
              className={imgClass}
              style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
            />
          );
        }
        return null;
      })}
    </div>
  );
}


