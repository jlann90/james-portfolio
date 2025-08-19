import { useMenu } from "../../context/MenuContext";

interface MenuItemsProps {
  menuId: string;
  children: React.ReactNode;
}

export default function MenuItems({
  menuId,
  children,
}: MenuItemsProps): React.ReactElement {
  const { menuSelection, handleMenuSelect } = useMenu();
  const menuListClass = "text-right pt-[24px] pr-[24px]";
  const menuBtnClass = "climate-crisis text-2xl uppercase text-th-db";

  const isActive = menuSelection.menuId === menuId;
  const hoverClass = isActive ? "" : "group";

  return (
    <li className={menuListClass}>
      <button
        disabled={isActive}
        onClick={() => handleMenuSelect(menuId)}
        className={`${menuBtnClass} ${hoverClass}${isActive ? " text-th-rd" : ""}`}
      >
        {isActive ? (
          <span className="underline">{children}</span>
        ) : (
          <>
            <span className="project-arrow opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-2">
              ➜
            </span>
            <span className="underline">{children}</span>
          </>
        )}
      </button>
    </li>
  );
}
