interface SectionTitleProps {
  eyebrow?: string;
  heading: string;
  headingSize?: 'xl' | 'lg' | 'md';
}

export function SectionTitle({ eyebrow, heading, headingSize = 'lg' }: SectionTitleProps) {
  return (
    <div className="section-title">
      {eyebrow && <span className="caption">{eyebrow}</span>}
      <h2 className={`display display-${headingSize}`}>{heading}</h2>
    </div>
  )
}
