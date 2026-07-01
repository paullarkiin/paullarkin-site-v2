type SectionHeadProps = {
  label: string;
  meta?: string;
};

export function SectionHead({ label, meta }: SectionHeadProps) {
  return (
    <div className="flex items-baseline justify-between mb-4">
      <h2 className="text-[14px] text-text-muted font-normal">{label}</h2>
      {meta ? (
        <p className="text-[14px] text-text-muted font-sans">{meta}</p>
      ) : null}
    </div>
  );
}
