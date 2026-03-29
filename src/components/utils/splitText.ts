import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });

  if (window.innerWidth < 900) return;

  const paras = document.querySelectorAll<HTMLElement>(".para");
  const titles = document.querySelectorAll<HTMLElement>(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  // 👉 Paragraph animation
  paras.forEach((para) => {
    // cleanup previous split
    if ((para as any)._split) {
      (para as any)._split.revert();
    }

    const split = new SplitType(para, {
      types: "lines, words",
    });

    (para as any)._split = split;

    gsap.from(split.words, {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power3.out",
      stagger: 0.02,
      scrollTrigger: {
        trigger: para.parentElement,
        start: TriggerStart,
        toggleActions: ToggleAction,
      },
    });
  });

  // 👉 Title animation
  titles.forEach((title) => {
    if ((title as any)._split) {
      (title as any)._split.revert();
    }

    const split = new SplitType(title, {
      types: "chars, lines",
    });

    (title as any)._split = split;

    gsap.from(split.chars, {
      opacity: 0,
      y: 80,
      rotate: 10,
      duration: 0.8,
      ease: "power2.inOut",
      stagger: 0.03,
      scrollTrigger: {
        trigger: title.parentElement,
        start: TriggerStart,
        toggleActions: ToggleAction,
      },
    });
  });
}