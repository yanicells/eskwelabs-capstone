type GlyphProps = {
  size?: number;
  color?: string;
};

export default function Glyph({ size = 22, color = "currentColor" }: GlyphProps) {
  return (
    <span className="glyph" style={{ width: size, height: size, color }}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4 L12 11 L20 4" />
        <path d="M12 11 L12 21" />
        <circle cx="12" cy="11" r="1.2" fill={color} stroke="none" />
      </svg>
    </span>
  );
}
