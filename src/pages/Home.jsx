import { useEffect } from "react";
import EmailButton from "../components/EmailButton";
import SvgButton from "../components/SVGButton";

export default function Home() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  };

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
      <section className="hero">
        <h1>Melvin Gieswein</h1>
        <p className="herotext">
          I am a passionate programmer, specialised in Softwaredevelopment, Webdesign, Video Editing and Animations. I will Gladly take your commissions and get you and your Customers a Product they deserve!
        </p>
        <br></br><br></br>
        <a className="cta" onClick={() => scrollToSection('contact')}>Contact Me</a>
      </section>
      <hr></hr>
      <br></br>
      <section id="about">
        <h2>About Me</h2>
        <br></br>
        <p>
          I am a young and energetic Freelancer, looking for innovative ways to bring new sparkles into the future!
        </p>
        <br></br>
        <p>
          I have loved computers and programming since I was a kid! That’s how I started learning programming, animation, and video editing. This hobby of mine developed into something that I truly enjoy, and that’s why I’m always searching to do something with this passion — and to overcome new challenges I encounter through programming! The fun of seeing a video I worked hard on finally turning out the way it’s supposed to be is simply amazing. I also really like Pixel Art as you can see in my Logo or my Profile Picture, which are things I made myself. and I might also start taking Commisions for Pixel Art.
        </p>
        <br></br>
        <p>
          I just enjoy creating something, and when I finish it, I truly adore seeing the thing I worked so long on come to life! That is why I decided to become a freelancer. I hope to bring the same joy I have for programming and animation to your commission, so that we can both enjoy the process of working together.
        </p>
      </section>
      <hr></hr>
      <br></br>
      <section id="software">
        <h2>Software</h2>
        <br></br>
        <p>
          I'm still in the Process of Learning Software Development, but I plan in speciallising on Mobile Apps with Kotlin.
          <br></br>
          for more Information, you can check out my <a href="/software" className="Linking">Software</a> Page!
        </p>
      </section>
      <hr></hr>
      <br></br>
      <section id="websites">
        <h2>Websites</h2>
        <p>
          I'm at the Moment Learning JavaScript and the React framework to build modern, interactive and reactive Websites. If you want an example This Website is made by me with html, css, JavaScript and React!
          <br></br>  
          for more Information, you can check out my <a href="/websites" className="Linking">Websites</a> Page!
        </p>
      </section>
      <hr></hr>
      <br></br>
      <section id="videoediting">
        <h2>Video Editing</h2>
        <p>
          I am using DaVinci Resolve for the Videos and already have the knowledge on how to use it, Commisions are already open. I am certain, that I will be able to satisfy and create great Videos for you!
          <br></br>  
          for more Information, you can check out my <a href="/videoediting" className="Linking">Video Editing</a> Page!
        </p>
      </section>
      <hr></hr>
      <br></br>
      <section id="animation">
        <h2>Animation</h2>
        <p>
          For Animating I am using the Python Library Manim, at the Moment I am still in the Process of Learning, but for simple but Modern Animations for maybe Youtube, it is already Great! I also have example Videos of my Manim creations on the <a href="/animation" className="Linking">Animation</a> Page, and also on my <a href="/websites" className="Linking">Websites</a> Page!
          <br></br>  
          for more Information, you can check out my <a href="/animation" className="Linking">Animation</a> Page!
        </p>
      </section>
      <hr></hr>
      <br></br>
      <section id="contact">
        <h2>Contact</h2>
        <br></br>
        <p>
          You can contact me over my Email: <p className="Linking">gieswein.melvin@gmail.com</p>
          <br></br>
          Or maybe over Fiverr: <p><a href="https://www.fiverr.com/melvin2611" className="Linking">https://www.fiverr.com/melvin2611</a></p>
        </p>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <EmailButton /> <SvgButton url="https://www.fiverr.com/melvin2611" imgSrc={`${import.meta.env.BASE_URL}Media/images/Fiverr.svg`} size={40} alt="Fiverr Button"/> <SvgButton url="https://github.com/Melvin2611" imgSrc={`${import.meta.env.BASE_URL}Media/images/GitHub.svg`} size={40} alt="GitHub Button"/> <SvgButton url="https://www.youtube.com/@Avokade2611" imgSrc={`${import.meta.env.BASE_URL}Media/images/YouTube.svg`} size={40} alt="YouTube Button"/>
      </section>
    </>
  );
}
