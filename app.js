document.addEventListener("DOMContentLoaded", function () {
  const productDescriptions = document.querySelectorAll(".productDescription__desc");
  const viewMoreBtns = document.querySelectorAll(".productDescription__viewMore");

  viewMoreBtns.forEach((element, i) => {
    element.addEventListener("click", () => {
      console.log("klick", i);
    });
  });
});
