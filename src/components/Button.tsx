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
      className="px-[24px] py-[6px] barlow-bold text-2xl rounded-xl bg-th-yw text-th-db border-2 hover:drop-shadow-button hover:text-th-yw hover:bg-th-db hover:border-color-th-yw transition-all duration-200"
      {...props}
    >
      {children}
    </button>
  );
}
