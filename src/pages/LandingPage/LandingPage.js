import React, { useEffect, useRef, useCallback, useState } from "react";
import "./Styles.css";
import hillBack from "../../img/Landing Page/Section 1/Hills/Hill Back.svg";
import hillMiddle from "../../img/Landing Page/Section 1/Hills/Hill Middle.svg";
import hillFront from "../../img/Landing Page/Section 1/Hills/Hill Front.svg";
import Moon from "../../img/Landing Page/Section 1/Moon.svg";
import illustration1 from "../../img/Landing Page/Section 2/Illustration.svg";
import illustration2 from "../../img/Landing Page/Section 3/Illustration.svg";
import illustration3 from "../../img/Landing Page/Section 4/Illustration.svg";
import dsaonelogo from "../../img/dsaonelogo.svg"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackToTop from "../../img/Landing Page/BackToTop.svg";
import Github from "../../img/Landing Page/Github.svg";
import { gsap } from "gsap";
import { Link as SLink } from "react-scroll";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  // Section1 Refs
  const meteoRef = useRef(null);
  const topbarRef = useRef(null);
  const dsaRef = useRef(null);
  const lineRef = useRef(null);
  const oneRef = useRef(null);
  const learnRef = useRef(null);
  const backRef = useRef(null);
  const moonRef = useRef(null);
  const middleRef = useRef(null);
  const frontRef = useRef(null);

  // Section2 Refs
  const illustration1Ref = useRef(null);
  const Container1Ref = useRef(null);
  const Heading1Ref = useRef(null);
  const Button1Ref = useRef(null);
  const Data1Ref = useRef(null);

  // Section3 Refs
  const illustration2Ref = useRef(null);
  const Container2Ref = useRef(null);
  const Heading2Ref = useRef(null);
  const Button2Ref = useRef(null);
  const Data2Ref = useRef(null);

  // Section4 Refs
  const illustration3Ref = useRef(null);
  const Container3Ref = useRef(null);
  const Heading3Ref = useRef(null);
  const Button3Ref = useRef(null);
  const Data3Ref = useRef(null);

  const scrollAnimations = useCallback(() => {
    gsap.to(topbarRef.current, {
      scrollTrigger: {
        trigger: topbarRef.current,
        start: "top 0%",
        scrub: true,
      },
      delay: 0.6,
      duration: 0.3,
      y: -50,
      opacity: 0,
    });

    gsap.to(dsaRef.current, {
      scrollTrigger: {
        trigger: dsaRef.current,
        start: "center 10%",
        scrub: true,
      },
      duration: 0.6,
      ease: "Power1.out",
      opacity: 0,
    });

    gsap.to(lineRef.current, {
      scrollTrigger: {
        trigger: lineRef.current,
        start: "center 40%",
        scrub: true,
      },
      duration: 0.6,
      ease: "Power1.out",
      opacity: 0,
    });

    gsap.to(oneRef.current, {
      scrollTrigger: {
        trigger: oneRef.current,
        start: "center 45%",
        scrub: true,
      },
      duration: 0.3,
      y: -60,
      opacity: 0,
    });

    gsap.to(learnRef.current, {
      scrollTrigger: {
        trigger: learnRef.current,
        start: "center 50%",
        scrub: true,
      },
      duration: 0.1,
      // x: 60,
      opacity: 0,
      ease: "Power1.out",
    });

    gsap.to(backRef.current, {
      scrollTrigger: {
        trigger: backRef.current,
        start: "top 15%",
        scrub: true,
      },
      duration: 2,
      y: 330,
    });

    gsap.to(moonRef.current, {
      scrollTrigger: {
        trigger: moonRef.current,
        start: "center 75%",
        scrub: true,
      },
      duration: 1.4,
      y: 200,
      ease: "Power1.out",
    });

    gsap.to(middleRef.current, {
      scrollTrigger: {
        trigger: middleRef.current,
        start: "top 5%",
        scrub: true,
      },
      duration: 2,
      y: 160,
      ease: "Power1.out",
    });

    gsap.to(frontRef.current, {
      scrollTrigger: {
        trigger: frontRef.current,
        start: "top 20%",
        scrub: true,
      },
      duration: 2,
      y: 20,
      ease: "Power1.out",
    });

    // Section 2
    gsap.from(illustration1Ref.current, {
      scrollTrigger: {
        trigger: illustration1Ref.current,
        start: "top 75%",
      },
      opacity: 0,
      duration: 0.8,
      x: 250,
      ease: "Power2.out",
    });

    gsap.from(Container1Ref.current, {
      scrollTrigger: {
        trigger: Container1Ref.current,
        start: "top 75%",
      },
      opacity: 0,
      duration: 0.8,
      x: -250,
      ease: "Power2.out",
    });

    gsap.from(Heading1Ref.current, {
      scrollTrigger: {
        trigger: Heading1Ref.current,
        start: "top 75%",
      },
      y: 200,
      delay: 0.6,
      duration: 0.5,
      ease: "Power2.out",
    });

    gsap.from(Button1Ref.current, {
      scrollTrigger: {
        trigger: Button1Ref.current,
        start: "top 75%",
      },
      y: -200,
      opacity: 0,
      delay: 0.6,
      duration: 0.6,
      ease: "Power2.out",
    });

    gsap.from(Data1Ref.current, {
      scrollTrigger: {
        trigger: Data1Ref.current,
        start: "top 75%",
      },
      opacity: 0,
      delay: 0.8,
      duration: 0.4,
      ease: "Power2.out",
    });

    // Section 3
    gsap.from(illustration2Ref.current, {
      scrollTrigger: {
        trigger: illustration2Ref.current,
        start: "top 75%",
      },
      opacity: 0,
      duration: 0.8,
      x: -250,
      ease: "Power2.out",
    });

    gsap.from(Container2Ref.current, {
      scrollTrigger: {
        trigger: Container2Ref.current,
        start: "top 75%",
      },
      opacity: 0,
      duration: 0.8,
      x: 250,
      ease: "Power2.out",
    });

    gsap.from(Heading2Ref.current, {
      scrollTrigger: {
        trigger: Heading2Ref.current,
        start: "top 75%",
      },
      y: 200,
      delay: 0.6,
      duration: 0.5,
      ease: "Power2.out",
    });

    gsap.from(Button2Ref.current, {
      scrollTrigger: {
        trigger: Button2Ref.current,
        start: "top 75%",
      },
      y: -200,
      opacity: 0,
      delay: 0.6,
      duration: 0.6,
      ease: "Power2.out",
    });

    gsap.from(Data2Ref.current, {
      scrollTrigger: {
        trigger: Data2Ref.current,
        start: "top 75%",
      },
      opacity: 0,
      delay: 0.8,
      duration: 0.4,
      ease: "Power2.out",
    });

    // Section 4
    gsap.from(illustration3Ref.current, {
      scrollTrigger: {
        trigger: illustration3Ref.current,
        start: "top 75%",
      },
      opacity: 0,
      duration: 0.8,
      x: 250,
      ease: "Power2.out",
    });

    gsap.from(Container3Ref.current, {
      scrollTrigger: {
        trigger: Container3Ref.current,
        start: "top 75%",
      },
      opacity: 0,
      duration: 0.8,
      x: -250,
      ease: "Power2.out",
    });

    gsap.from(Heading3Ref.current, {
      scrollTrigger: {
        trigger: Heading3Ref.current,
        start: "top 75%",
      },
      y: 200,
      delay: 0.6,
      duration: 0.5,
      ease: "Power2.out",
    });

    gsap.from(Button3Ref.current, {
      scrollTrigger: {
        trigger: Button3Ref.current,
        start: "top 75%",
      },
      y: -200,
      opacity: 0,
      delay: 0.6,
      duration: 0.6,
      ease: "Power2.out",
    });

    gsap.from(Data3Ref.current, {
      scrollTrigger: {
        trigger: Data3Ref.current,
        start: "top 75%",
      },
      opacity: 0,
      delay: 0.8,
      duration: 0.4,
      ease: "Power2.out",
    });
  }, []);

  const [visible, setVisible] = useState(false);

  const listenToScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  useEffect(() => {
    scrollAnimations();
    return () => {};
  }, [scrollAnimations]);

  useEffect(() => {
    meteors();
    return () => {};
  }, []);

  const meteors = () => {
    let amount = 20;
    let i = 0;
    while (i < amount) {
      let meteor = document.createElement("i");
      let size = Math.random() * 5;
      let posX = Math.floor(Math.random() * window.innerWidth);
      let delay = Math.random() * -20;

      meteor.style.width = 0.2 + size + "px";
      meteor.style.left = posX + "px";
      meteor.style.animationDelay = delay + "s";
      meteoRef.current.appendChild(meteor);
      i++;
    }
  };

  return (
    <div className="text-l relative z-20 overflow-hidden text-gray82" id="top">
      <SLink to="top" smooth={true} duration={700}>
        {visible && (
          <span className="text-xl bottom-5 fixed z-10 animate-bounce text-center opacity-1 left-0 bg-grey-900 cursor-pointer w-16 ml-2">
            <img src={BackToTop} alt="hover logo" />
          </span>
        )}
      </SLink>
      <div
        className="w-full h-8 pt-6 absolute mix-blend-screen z-50 cursor-pointer select-none"
        ref={topbarRef}>
        <div className="flex w-full">
          <div className="basis-4/5 flex self-center p-2">
            <div className="pl-12 pr-16">
            <img className="h-10 w-10" src={dsaonelogo} alt="Main Logo" />
            </div>
            <div className="flex justify-around">
              <div className="text-orange-300 text-xl pr-12">
                <SLink to="data" smooth={true} duration={700}>
                  <div>DataStructures</div>
                </SLink>
              </div>
              <div className="text-orange-300 text-xl pr-12">
                <SLink to="algorithm" smooth={true} duration={800}>
                  <div>Algorithm</div>
                </SLink>
              </div>
              <div className="text-orange-300 text-xl">
                <SLink to="about" smooth={true} duration={900}>
                  <div>Playground</div>
                </SLink>
              </div>
            </div>
          </div>
          <div className="basis-1/5 flex self-center">
            <a href="https://github.com/Ishan-Shukla/DSAone/tree/build">
              <img className="h-10 w-10" src={Github} alt="github Logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-horizon h-screen w-screen relative" id="main">
        <div
          className="absolute w-full h-full z-0 skew-x-12"
          ref={meteoRef}></div>
        <div className="absolute h-1/3 w-3/12 left-56 top-36">
          <div
            className="bg-clip-text text-transparent bg-gradient-to-b from-orange-700 to-orange-400 text-9xl z-50 mix-blend-screen"
            ref={dsaRef}>
            DSA
          </div>
          <div className="z-50 mix-blend-screen" ref={lineRef}>
            <svg height="2" width="350">
              <line x1="25" x2="300" stroke="#b6b6b6" strokeWidth="4" />
            </svg>
          </div>
          <div
            className="bg-clip-text text-transparent bg-gradient-to-b from-orange-400 to-orange-200 text-7xl ml-28 z-20 mix-blend-screen"
            ref={oneRef}>
            one
          </div>
          <div
            className="bg-clip-text text-transparent bg-gradient-to-b from-orange-400 to-orange-200 text-3xl ml-11 mt-5 mix-blend-screen"
            ref={learnRef}>
            Learn By Fun...
          </div>
        </div>
        <div className="absolute h-screen w-full top-20">
          <div className="w-full h-screen relative pt-20">
            <img
              className=" absolute w-full h-full bottom-0 left-0 object-cover "
              src={hillBack}
              ref={backRef}
              alt="Hill"
            />
            <img
              className=" absolute h-2/5 bottom-20 left-56 mix-blend-screen"
              src={Moon}
              ref={moonRef}
              alt="Moon"
            />
            <img
              className=" absolute w-full h-full bottom-14 left-0 object-cover "
              src={hillMiddle}
              ref={middleRef}
              alt="Hill"
            />
            <img
              className=" absolute w-full h-full bottom-6 left-0 object-cover "
              src={hillFront}
              alt="Hill"
            />
          </div>
        </div>
      </div>
      <div className="bg-primary-1 h-screen w-screen relative" id="data">
        <div className="flex h-full w-full">
          <div className="basis-1/2 relative" ref={illustration1Ref}>
            <img
              src={illustration1}
              alt="Illustration"
              className="absolute w-9/12 bottom-24 left-24 object-cover"
            />
          </div>
          <div className="basis-1/2 relative" ref={Container1Ref}>
            <div className="absolute w-full h-3/4 top-24 flex flex-col">
              <div className="text-plain-white flex flex-col" ref={Heading1Ref}>
                <div className="text-9xl pt-4 pl-24">DATA</div>
                <div className="text-7xl self-end p-4 pr-24">STRUCTURE</div>
              </div>
              <div className=" w-3/4 self-center p-4 text-xl" ref={Data1Ref}>
                Data Structure is a way to store and organize data so that it
                can be used efficiently. Our Data Structure tutorial includes
                all important topics of Data Structure such as Array, Trees,
                Linked List, Stack, Queue, Graph etc.
              </div>
              <Link
                className="self-end mr-32 cursor-pointer"
                to="/DataStructure">
                <div
                  className=" w-fit p-4 rounded-full bg-primary-3 text-plain-white text-2xl "
                  ref={Button1Ref}>
                  Learn More
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-1 h-screen w-screen relative" id="algorithm">
        <div className="flex h-full w-full">
          <div className="basis-1/2 relative" ref={Container2Ref}>
            <div className="absolute w-full h-3/4 top-44 flex flex-col">
              <div
                className="text-plain-white text-8xl pt-4 pl-24"
                ref={Heading2Ref}>
                ALGORITHM
              </div>
              <div
                className=" w-3/4 self-center p-4 mt-8 text-xl"
                ref={Data2Ref}>
                Algorithm is a collection of steps to solve a particular
                problem. Our Algorithm tutorial includes mostly used algorithm
                design techniques such as Greedy, Divide & Conquer, Dynamic
                programming, Backtracking etc.
              </div>
              <Link className="self-end mr-32 cursor-pointer" to="/Algorithm">
                <div
                  className=" w-fit p-4 rounded-full bg-primary-3 text-plain-white text-2xl self-start ml-28 mt-8 cursor-pointer"
                  ref={Button2Ref}>
                  Learn More
                </div>
              </Link>
            </div>
          </div>
          <div className="basis-1/2 relative" ref={illustration2Ref}>
            <img
              src={illustration2}
              alt="Illustration"
              className="absolute w-9/12 bottom-24 left-24 object-cover"
            />
          </div>
        </div>
      </div>
      <div className="bg-primary-1 h-screen w-screen relative" id="about">
        <div className="flex h-3/4 w-full">
          <div className="basis-1/2 relative" ref={illustration3Ref}>
            <img
              src={illustration3}
              alt="Illustration"
              className="absolute w-9/12 top-12 left-24 object-cover"
            />
          </div>
          <div className="basis-1/2 relative" ref={Container3Ref}>
            <div className="absolute w-full h-3/4 top-12 flex flex-col">
              <div className="text-plain-white flex flex-col" ref={Heading3Ref}>
                <div className="text-9xl pt-4 pl-24">PLAY</div>
                <div className="text-7xl self-end p-4 pr-24">GROUND</div>
              </div>
              <div className=" w-3/4 self-center p-4 text-xl" ref={Data3Ref}>
                Worry about how algorithms work don't need to panic. The best
                way to Learn Algorithms is to visualize it.So come to our
                PlayGround We will be visualizing together with fun .
              </div>
              <Link
                className="self-end mr-32 cursor-pointer"
                to={"/PlayGround"}>
                <div
                  className=" w-fit p-4 rounded-full bg-primary-3 text-plain-white text-2xl"
                  ref={Button3Ref}>
                  Go & Play
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-primary-1 h-1/4 w-full pt-8">
          <div className="marquee mt-10">
            <ul className="scroll-track scroll1 list-none h-full flex">
              <li>Array</li>
              <li>Tree</li>
              <li>Quick</li>
              <li>Sort</li>
              <li>Merge</li>
              <li>Sort</li>
              <li>Algo</li>
              <li>Linked</li>
              <li>List</li>
              <li>Matrix</li>
              <li>Graph</li>
              <li>DFS</li>
              <li>BFS</li>
              <li>A-star</li>
              <li>Strassen</li>
              <li>Dijkstra</li>
              <li>Node</li>
              <li>Path</li>
              <li>Root</li>
              <li>n-Queen</li>
              <li>Array</li>
              <li>Tree</li>
              <li>Quick</li>
              <li>Sort</li>
              <li>Merge</li>
              <li>Sort</li>
              <li>Algo</li>
              <li>Linked</li>
              <li>List</li>
              <li>Matrix</li>
              <li>Graph</li>
              <li>DFS</li>
              <li>BFS</li>
              <li>A-star</li>
              <li>Strassen</li>
              <li>Dijkstra</li>
              <li>Node</li>
              <li>Path</li>
              <li>Root</li>
              <li>n-Queen</li>
            </ul>
          </div>
          <div className="marquee mt-4">
            <ul className="scroll-track scroll2 list-none h-full flex">
              <li>Data</li>
              <li>Structure</li>
              <li>Priority</li>
              <li>Queue</li>
              <li>Stack</li>
              <li>Heap</li>
              <li>RSA</li>
              <li>DFT</li>
              <li>FFT</li>
              <li>Spanning</li>
              <li>Prims</li>
              <li>Kruskal</li>
              <li>Duality</li>
              <li>Fibonacci</li>
              <li>Prime</li>
              <li>Radix</li>
              <li>Hash</li>
              <li>Table</li>
              <li>LCS</li>
              <li>Huffman</li>
              <li>Data</li>
              <li>Structure</li>
              <li>Priority</li>
              <li>Queue</li>
              <li>Stack</li>
              <li>Heap</li>
              <li>RSA</li>
              <li>DFT</li>
              <li>FFT</li>
              <li>Spanning</li>
              <li>Prims</li>
              <li>Kruskal</li>
              <li>Duality</li>
              <li>Fibonacci</li>
              <li>Prime</li>
              <li>Radix</li>
              <li>Hash</li>
              <li>Table</li>
              <li>LCS</li>
              <li>Huffman</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
