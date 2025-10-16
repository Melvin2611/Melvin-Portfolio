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
      <section id="aniheader">
        <h1>Animations</h1>
        <br />
        <p>I will create you some creative and stylistic 2D animations for your videos or websites.</p>
        <br /><br />
        <h2>Examples:</h2>
      </section>
      <section id="webexamples">
        <div className="Example">
            <video
              src={`${import.meta.env.BASE_URL}public/Media/videos/webadani.mp4`}
              controls
              width="35%"
              height="200px"
              style = {{borderRadius: "18px",boxShadow: "5px 0px 5px black", alignSelf: "left"}}
              className="exampleP"
            />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <br />
            <h3>Website creating Ad</h3>
            <br />
            <p>
              This is one of the Animations I have done, if you want to see it in use, you can check out my <Link to="/websites" className="Linking">Websites</Link> Page, where I used it for myself.
            </p><br />
            <p>This is also a great example of what you can expect from me and in what type of animation I specialise in,</p>
            <p> so it is great for maybe showing something cool for a Youtube Video or a short form Video like a TikTok, Reel</p>
            <p>or YTshort. </p>
          </div>
        </div>
      </section>
    </>
  );
}
