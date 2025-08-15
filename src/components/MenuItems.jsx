import { useMenu } from "../context/MenuContext.jsx";

export default function MenuItems({ menuId, children }) {
  const { menuSelection, handleMenuSelect } = useMenu();
  const menuListClass = "text-right pt-[24px] pr-[24px]";
  const menuBtnClass =
    "climate-crisis text-2xl uppercase text-th-db hover:text-th-lb";
  const isActive = menuSelection.menuId === menuId;

  return (
    <li className={menuListClass}>
      <button
        onClick={() => handleMenuSelect(menuId)}
        className={`${menuBtnClass}${isActive ? " active" : ""}`}
      >
        {children}
      </button>
    </li>
  );
}
