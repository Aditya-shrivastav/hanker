document.addEventListener("DOMContentLoaded", async () => {
  const includes = document.querySelectorAll("[data-include]");

  try {
    await Promise.all(
      Array.from(includes).map((el) =>
        fetch(el.getAttribute("data-include"))
          .then((res) => res.text())
          .then((data) => {
            el.insertAdjacentHTML("afterend", data);
            el.remove();
          })
      )
    );
  } catch (err) {
    console.error("Head include failed", err);
  } finally {
    // Reveal page only after head is ready
    setTimeout(() => {
      document.documentElement.style.visibility = "visible";
    }, 300);
  }
});
