type ArrowIconProps = {
  className?: string;
};

export function ArrowIcon({ className = "" }: ArrowIconProps) {
  return (
    <span
      aria-hidden="true"
      className={`arrow-icon inline-block shrink-0 ${className}`}
    />
  );
}
