type ButtonProps = {
  color?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  fullWidth?: boolean;
  py?: number;
  px?: number;
};

export default function Button({
  color = 'bg-slate-200',
  children,
  onClick,
  className,
  fullWidth = false,
  py = 2,
  px = 3,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${color} py-${py} px-${px} rounded ${
        fullWidth && 'w-full'
      } ${className}`}
    >
      {children}
    </button>
  );
}
