type FramedPlaceholderProps = {
  url: string;
  label: string;
  ratio?: string;
};

export default function FramedPlaceholder({
  url,
  label,
  ratio = "16/9",
}: FramedPlaceholderProps) {
  return (
    <div className="frame">
      <div className="frame-bar">
        <span className="frame-dot"></span>
        <span className="frame-dot"></span>
        <span className="frame-dot"></span>
        <span className="frame-url">{url}</span>
      </div>
      <div style={{ aspectRatio: ratio, position: "relative" }}>
        <div
          className="ph"
          style={{
            position: "absolute",
            inset: 0,
            border: "none",
            borderRadius: 0,
          }}
        >
          <span className="ph-label">{label}</span>
        </div>
      </div>
    </div>
  );
}

type FeatureScreenshotProps = {
  url: string;
  label: string;
  caption?: string;
  ratio?: string;
};

export function FeatureScreenshot({
  url,
  label,
  caption,
  ratio = "16/9",
}: FeatureScreenshotProps) {
  return (
    <figure style={{ margin: "60px 0", display: "block" }}>
      <FramedPlaceholder url={url} label={label} ratio={ratio} />
      {caption && (
        <figcaption
          className="upcase-mono"
          style={{
            color: "var(--ink-mute)",
            marginTop: 14,
            textAlign: "left",
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
