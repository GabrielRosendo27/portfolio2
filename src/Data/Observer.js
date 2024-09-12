export const registerObserver = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    },
    { threshold: [0.25, 0.5, 0.75] }
  );

  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => observer.observe(box));

  return observer;
};
