// Text animation about me section
var _CONTENT = [
	"SQL Databases",
	"API'S - Postman, SoapUI",
	"Selenium WebDriver",
	"Jira, Confluence, Azure",
	"Figma prototypes",
	"Agile methodology",
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Cursor element 
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() {
	// Get substring with 1 characater added
	var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if (text === _CONTENT[_PART]) {
		// Hide the cursor
		_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function () {
			_INTERVAL_VAL = setInterval(Delete, 75);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if (text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if (_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;

		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function () {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);

// Text animation about me section END


// Reveal library

ScrollReveal().reveal('.right-slide', { origin: 'right', distance: '400px', duration: 1000, easing: 'ease-in', reset: true });
ScrollReveal().reveal('.left-slide', { origin: 'left', distance: '400px', duration: 1000, easing: 'ease-in', reset: true });
ScrollReveal().reveal('.bottom-slide', { origin: 'bottom', distance: '200px', duration: 1000, easing: 'ease-in', reset: true });
ScrollReveal().reveal('#picture', { duration: 2000, easing: 'ease-in', reset: true });
ScrollReveal().reveal('.social', { origin: 'right', distance: '150px', duration: 1000, easing: 'ease-in', reset: true });



// Arrow function
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
			top: 915,
			behavior: "smooth"
		});
	});

	// Event listener for scroll events
	window.addEventListener("scroll", toggleArrow);

	// Initial check for scroll position
	toggleArrow();
});

//Mobile nav bar

const hamburger = document.querySelector(".hamburger");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const mobileNav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", () => {
   bar1.classList.toggle("animateBar1");
   bar2.classList.toggle("animateBar2");
   bar3.classList.toggle("animateBar3");
   mobileNav.classList.toggle("open-drawer");
});


