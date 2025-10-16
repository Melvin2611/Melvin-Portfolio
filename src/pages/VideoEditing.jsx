import { useEffect } from "react";
export default function Websites() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section, i) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(20px)";
      setTimeout(() => {
        section.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      }, i * 200);
    });
  }, []);
  return (
    <>
      <br /><br /><br />
      <section id="videoheader">
        <h1>Video Editing</h1>
        <br />
        <p>Professional Video Cutting and Editing with Music sound effects and specialeffects, with Tools like DaVinciResolve for extraordinary results!</p>
        <br /><br />
        <h2>Examples:</h2>
        <br /> {/* Delete later! */}
        <p>currently no examples available.</p> {/* Delete later, when Examples are ready */}
      </section>
    </>
  );
}
