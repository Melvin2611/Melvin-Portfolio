import { useEffect } from "react";

export default function Software() {
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
      <section id="softwarehhead">
        <h1>Software Development</h1>
        <br />
        <p>
          I am still learning this Category, so there will be no commissions for the time being. But it may be Noted, that I plan on learning Kotlin for developing Mobile Apps and I will also try to specify in Mobile Apps, although I am also going to learn how to create Desktop Apps.
        </p>
        <br /><br />
        <h2>Examples:</h2> {/* Line is here so it won't play the Fade In go up animation! */}
      </section>
      <section id="SlimeyJump example">
        <div className="Example">
          <a href="https://avokade.itch.io/slimey-jump">
            <img
              src={`${import.meta.env.BASE_URL}Media/images/SlimeyJump.png`}
              alt="Slimey Jump png"
              style={{
                height: "200px",
                borderRadius: "18px",
                boxShadow: "5px 0px 5px black",
                alignSelf: "left",
              }}
              className="exampleP"
            />
          </a>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <br />
            <h3>Slimey Jump</h3>
            <br />
            <p>
              This is a Game I made in the Godot Engine — it’s an open-source 2D Puzzle Platformer, released on{" "}
              <a className="Linking" href="https://avokade.itch.io/slimey-jump">
                itch.io
              </a>{" "}
              and{" "}
              <a className="Linking" href="https://github.com/Melvin2611/SlimeyJump">
                GitHub
              </a>. It was my first game and I learned a lot about exporting projects, code and asset optimization, performance, and game design. It’s available for Windows and Android — you only need to download one file.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
