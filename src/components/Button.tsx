import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({
  children,
  ...props
}: ButtonProps): React.ReactElement {
  return (
    <button
      className="px-[16px] sm:px-[20px] md:px-[24px] py-[4px] sm:py-[5px] md:py-[6px] barlow-bold text-lg sm:text-xl md:text-2xl rounded-xl border-2 sm:border-3 md:border-4 border-th-db text-th-db bg-th-yw hover:drop-shadow-button hover:text-th-rd transition-all duration-200"
      {...props}
    >
      {children}
    </button>
  );
}
