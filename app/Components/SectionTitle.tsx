interface SectionTitleProps {
  number: string | number;
  title: string;
  color?: string;
}
import "./css/SectionTitle.css"

export default function SectionTitle({
  number,
  title,
  color,
}: SectionTitleProps) {
  return (
    <div className="section-title" style={{ color }}>

      <span className="section-title__number">{number}</span>
      <span className="section-title__divider">|</span>
      <h2 className="section-title__text">{title}</h2>
    </div>
  );
}