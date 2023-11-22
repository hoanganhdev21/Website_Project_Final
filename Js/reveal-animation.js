ScrollReveal({
  reset: true,
  distance: "70px",
  duration: 2500,
  delay: 200,
});

ScrollReveal().reveal(".left", {
  origin: "left",
});

ScrollReveal().reveal(".interval", {
  interval: 1, // thời gian giữa mỗi item.
  delay: 0,
  origin: "bottom",
  distance: "90px",
});

ScrollReveal().reveal(".right", {
  origin: "right",
});

ScrollReveal().reveal(".bot", {
  origin: "bottom",
});

ScrollReveal().reveal(".top", {
  origin: "top",
});
