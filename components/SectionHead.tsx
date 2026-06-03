type SectionHeadProps = {
  label: string;
  meta?: string;
};

export function SectionHead({ label, meta }: SectionHeadProps) {
  return (
    <div className="flex items-baseline justify-between mb-4">
      <p className="text-[14px] text-text-muted">{label}</p>
      {meta ? (
        <p className="text-[14px] text-text-dim font-sans">{meta}</p>
      ) : null}
    </div>
  );
}
