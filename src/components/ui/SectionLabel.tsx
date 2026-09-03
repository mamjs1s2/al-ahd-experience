interface SectionLabelProps {
  label: string;
  labelAr?: string;
  upperCase?: boolean;
  className?: string;
}

export default function SectionLabel({
  label,
  labelAr,
  upperCase = true,
  className = '',
}: SectionLabelProps) {
  return (
    <>
      <div
        className={`section-label ${upperCase ? 'uppercase' : ''} ${className}`}
        data-reveal
      >
        {label}
      </div>
      {labelAr && (
        <div
          className={`section-label text-right ${upperCase ? 'uppercase' : ''} ${className}`}
          dir="rtl"
          data-reveal
        >
          {labelAr}
        </div>
      )}
    </>
  );
}
