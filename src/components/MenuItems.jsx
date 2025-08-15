import { useMenu } from "../context/MenuContext.jsx";

export default function MenuItems({ menuId, children }) {
  const { menuSelection, handleMenuSelect } = useMenu();
  const menuListClass = "text-right pt-[24px] pr-[24px]";
  const menuBtnClass = "climate-crisis text-2xl uppercase text-th-db";

  const isActive = menuSelection.menuId === menuId;
  const hoverClass = isActive ? "" : "hover:text-th-lb";

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
