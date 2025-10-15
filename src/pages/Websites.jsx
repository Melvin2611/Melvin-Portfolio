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
      <section id="webheader">
        <h1>Web Development</h1>
        <br />
        <p>See the responsive and modern Webpages I have done with HTML, CSS, JavaScript and frameworks like React.</p>
        <br></br><br></br>
        <h2>Examples:</h2>
      </section>
      <section id="webexamples">
        <div className="Example">
          <a href="/">
            <img
              src={`${import.meta.env.BASE_URL}Media/images/Homescr.png`}
              alt="HomeScreen png"
              style={{
                height: "200px",
                borderRadius: "18px",
                boxShadow: "5px 0px 5px black",
                alignSelf: "left",
              }}
            />
          </a>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <br />
            <h3>Melvin Gieswein Portfolio</h3>
            <br />
            <p>
              This is a great Website Example since you are already on it right now, yes this Website Portfolio has been fully developed by me as <br />
              1. a Portfolio so you can learn about me and my Projects <br />
              2. as an example for my Portfolio!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
