type ScreenshotProps = {
  label?: string;
  width?: number;
  height?: number;
};

export function Screenshot({
  label = "REPLACE WITH SCREENSHOT",
  width = 800,
  height = 500,
}: ScreenshotProps) {
  return (
    <div
      className="my-6 w-full bg-zinc-100 border-2 border-dashed border-zinc-400 flex items-center justify-center text-zinc-600 text-sm font-mono px-4 text-center"
      style={{
        aspectRatio: `${width} / ${height}`,
        maxWidth: `${width}px`,
      }}
    >
      [{label}]
    </div>
  );
}

type LinkPlaceholderProps = {
  label?: string;
};

export function LinkPlaceholder({
  label = "Link goes here",
}: LinkPlaceholderProps) {
  return (
    <span className="inline-block bg-zinc-100 text-zinc-600 underline decoration-dotted px-1.5 py-0.5 text-sm font-mono">
      [{label}]
    </span>
  );
}
