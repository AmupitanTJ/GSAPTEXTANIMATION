gsap.registerPlugin(SplitText);

const text = document.querySelector(".text");
const mainParagraph = document.querySelector(".main-paragraph");

const splitText = new SplitText(text,{type:"chars"});
const splitParagraph = new SplitText(mainParagraph,{type:"words"});

const tl = gsap.timeline();

// make sure all chars start white before the reveal
// (CSS default may be green, so we override it instantly)
tl.set(splitText.chars, { color: "#ffffff" });

// reveal the letters without touching colour
// they stay white until the separate green tween runs
tl.from(splitText.chars, {
    y: 100,
    rotationX: 90,
    opacity: 0,
    stagger: 0.03,
    transformOrigin: "center top",
    perspective: 700,
});

// delay the colour change so the white text is visible first
tl.to(splitText.chars, {
    color: "#83e75c",
    duration: 0.6,
    delay: -0.6, 
    stagger: 0.03,
    ease: "power4.inOut",
});

// reload page when reset button clicked so animation restarts
const resetBtn = document.querySelector('.button');
if (resetBtn) {
    resetBtn.addEventListener('click', () => window.location.reload());
}


tl.from(splitParagraph.words,{
    y: 60,
    opacity: 0,
    filter: "blur(10px)",
    stagger: 0.03,
    duration: 0.7,
    ease: "power4.Out",
}).to(splitParagraph.words,{
    filter: "blur(0px)",
    duration: 0.5,
    stagger: 0.03,
    ease: "power4.inOut",
})
