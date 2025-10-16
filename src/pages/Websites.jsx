import { useEffect } from "react";
import { Link } from 'react-router-dom';

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
      <section id="webheader">
        <h1>Web Development</h1>
        <br />
        <p>See the responsive and modern Webpages I have done with HTML, CSS, JavaScript and frameworks like React.</p>
      </section>
      <section id="webadVideo">
        <div className="flex justify-center p-4">
          <video
            src={`${import.meta.env.BASE_URL}/Media/videos/webad.mp4`}
            autoPlay
            loop
            width="100%"
            height="480px"
          />
        </div>
      </section>
      <section id="webexamples">
        <h2>Examples:</h2>
        <br /><br />
        <div className="Example">
          <Link to="/">
            <img
              src={`${import.meta.env.BASE_URL}Media/images/Homescr.png`}
              alt="HomeScreen png"
              style={{
                height: "200px",
                borderRadius: "18px",
                boxShadow: "5px 0px 5px black",
                alignSelf: "left",
              }}
              className="exampleP"
            />
            </Link>
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
