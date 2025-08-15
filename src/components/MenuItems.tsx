import { useMenu } from "../context/MenuContext";

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
  const menuBtnClass = "climate-crisis text-2xl uppercase text-th-db underline";

  const isActive = menuSelection.menuId === menuId;
  const hoverClass = isActive ? "" : "hover:drop-shadow-menu-item";

  return (
    <li className={menuListClass}>
      <button
        disabled={isActive}
        onClick={() => handleMenuSelect(menuId)}
        className={`${menuBtnClass} ${hoverClass}${isActive ? " text-th-rd" : ""}`}
      >
        {children}
      </button>
    </li>
  );
}
