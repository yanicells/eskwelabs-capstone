type SectionMarkProps = {
  num: string;
  label: string;
};

export default function SectionMark({ num, label }: SectionMarkProps) {
  return (
    <div className="section-mark">
      <span className="bar"></span>
      <span className="num">{num}</span>
      <span>{label}</span>
    </div>
  );
}
