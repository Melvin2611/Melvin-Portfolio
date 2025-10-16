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
        <br /><br /><br />
        <h2>Examples:</h2>
        <br />
      </section>
      <section id="aniexample1">
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
        <br /><br />
      </section>
      <section id="aniexample2">  
        <div className="Example">
            <video
              src={`${import.meta.env.BASE_URL}public/Media/videos/T5SMAani.mp4`}
              controls
              width="31.2%"
              height="200px"
              style = {{borderRadius: "18px",boxShadow: "5px 0px 5px black", alignSelf: "left"}}
              className="exampleP"
            />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <br />
            <h3>Top 5 Social Media Apps</h3>
            <br />
            <p>
              This is another animation I've made, another great Example, on what my Animations can be used for.</p> 
              <p>This Animation in Particular is only made for my Portfolio, so you won't find it anywhere else.</p>
              <br />
              <p>If you find this animation in Particular is what you are looking for, I can also change the Text in this</p>
              <p>Animation to your Liking and give it to you like this, you only need to contact me over on</p>
              <p><Link to="/#contact" className="Linking">my Contact section</Link> of the Homepage.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
