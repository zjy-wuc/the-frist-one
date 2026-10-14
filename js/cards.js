import { animate, stagger } from "./vendor/anime.esm.js";

export function initCardsAnim() {
  var cards = document.querySelectorAll(".card");
  if (!cards.length) return;

  animate(".card", {
    opacity: [0, 1],
    translateY: [24, 0],
    delay: stagger(120),
    duration: 700,
    ease: "outBack",
  });
}
