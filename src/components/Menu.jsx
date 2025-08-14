export default function Menu() {
  const menuListClass = "text-right pt-[24px] pr-[24px]";
  const menuBtnClass =
    "climate-crisis text-2xl uppercase text-th-db hover:text-th-lb";

  return (
    <section className="pt-[36px] pl-[102px] h-screen">
      <nav className="w-[282px] h-[101vh] bg-th-yw drop-shadow-menu rounded-xl outline-6 outline-th-db">
        <ul>
          <li className={menuListClass}>
            <button className={menuBtnClass}>Home</button>
          </li>
          <li className={menuListClass}>
            <button className={menuBtnClass}>Projects</button>
          </li>
          <li className={menuListClass}>
            <button className={menuBtnClass}>Experience</button>
          </li>
          <li className={menuListClass}>
            <button className={menuBtnClass}>Contact</button>
          </li>
        </ul>
      </nav>
    </section>
  );
}
