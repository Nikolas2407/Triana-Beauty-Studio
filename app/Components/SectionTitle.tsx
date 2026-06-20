interface SectionTitleProps {
  number: string | number;
  title: string;
}
import "./css/SectionTitle.css"

export default function SectionTitle({
  number,
  title,
}: SectionTitleProps) {
  return (
    <div className="section-title">
      <span className="section-title__number">{number}</span>
      <span className="section-title__divider">|</span>
      <h2 className="section-title__text">{title}</h2>
    </div>
  );
}