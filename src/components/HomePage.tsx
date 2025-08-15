import ProfilePhoto from "./../assets/ProfilePhoto.png";

export default function Homepage(): React.ReactElement {
  return (
    <section className="pt-[120px] max-w-[700px]">
      <img
        src={ProfilePhoto}
        alt="Pencil sketch style photo of James Lannon"
        width="248"
      />
      <h1 className="climate-crisis text-[64px] uppercase pt-[30px] pl-[10px] text-th-yw drop-shadow-title">
        James
        <br /> Lannon
      </h1>
      <p className="barolow-bold text-th-wh text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare
        ultrices varius. Donec enim libero, cursus vel dui vitae, tempor lacinia
        nunc. Nam elementum ipsum suscipit massa posuere tempus. Phasellus
        consectetur justo lorem, vitae pretium orci aliquam nec. Cras gravida
        turpis vel velit sollicitudin tempor vitae eu mauris. Sed nunc urna,
        iaculis ac pellentesque nec, vulputate sed neque. In porta ex lorem, in
        rhoncus lacus mollis sed. Ut commodo erat sed dapibus aliquam.
      </p>
    </section>
  );
}
