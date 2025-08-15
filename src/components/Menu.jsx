import MenuItems from "./MenuItems.jsx";
import { useMenu } from "../context/MenuContext.jsx";

export default function Menu() {
  const { menuSelection, handleMenuSelect } = useMenu();

  return (
    <section className="pt-[36px] pl-[102px] h-screen">
      <nav className="w-[282px] h-[101vh] bg-th-yw drop-shadow-menu rounded-xl outline-6 outline-th-db">
        <ul>
          <MenuItems menuId="home">Home</MenuItems>
          <MenuItems menuId="projects">Projects</MenuItems>
          <MenuItems menuId="experience">Experience</MenuItems>
          <MenuItems menuId="contact">Contact</MenuItems>
        </ul>
      </nav>
    </section>
  );
}
