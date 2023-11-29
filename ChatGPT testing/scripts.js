document.addEventListener("DOMContentLoaded", function () {
    var scrollArrow = document.getElementById("scroll-arrow");

    // Show/hide the arrow based on scroll position
    function toggleArrow() {
        if (window.scrollY > 100) { // Adjust the scroll threshold as needed
            scrollArrow.classList.add("hide");
        } else {
            scrollArrow.classList.remove("hide");
        }
    }

    // Smooth scroll to the top when the arrow is clicked
    scrollArrow.addEventListener("click", function () {
        window.scrollTo({
            top: 400,
            behavior: "smooth"
        });
    });

    // Event listener for scroll events
    window.addEventListener("scroll", toggleArrow);

    // Initial check for scroll position
    toggleArrow();
});