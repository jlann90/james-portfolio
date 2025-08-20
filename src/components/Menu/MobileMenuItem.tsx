interface MobileMenuItemProps {
  menuId: string;
  currentMenuId: string;
  delay: string;
  onClick: (menuId: string) => void;
  children: React.ReactNode;
}

export default function MobileMenuItem({
  menuId,
  currentMenuId,
  delay,
  onClick,
  children,
}: MobileMenuItemProps): React.ReactElement {
  return (
    <div
      className="animate-fade-in-staggered list-none text-center"
      style={{ "--delay": delay } as React.CSSProperties}
    >
      <button
        disabled={currentMenuId === menuId}
        onClick={() => onClick(menuId)}
        className={`climate-crisis text-2xl uppercase text-th-db ${
          currentMenuId === menuId ? "text-th-rd" : ""
        }`}
      >
        <span className="underline">{children}</span>
      </button>
    </div>
  );
}
