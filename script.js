// CARD DESGIN
var carouselWidth = $(".carousel-inner")[0].scrollWidth;

var cardWidth = $(".carousel-item").width();

var scrollPosition = 0;

$(".carousel-control-next").on("click", function () {
  if (scrollPosition < (carouselWidth - cardWidth * 4)) { //check if you can go any further
    scrollPosition += cardWidth;  //update scroll position
    $(".carousel-inner").animate({ scrollLeft: scrollPosition },600); //scroll left
  }
});


$(".carousel-control-prev").on("click", function () {
  if (scrollPosition > 0) {
    scrollPosition -= cardWidth;
    $(".carousel-inner").animate(
      { scrollLeft: scrollPosition },
      600
    );
  }
});

var multipleCardCarousel = document.querySelector(
  "#carouselExampleControls"
);
if (window.matchMedia("(min-width: 768px)").matches) {
  //rest of the code
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}

var carousel = new bootstrap.Carousel(multipleCardCarousel, {
  interval: false,
  wrap: false,
});

// maomfo
function applyFilters() {
  var name = document.getElementById("name").value;
  var category = document.getElementById("category").value;
  
  // Here, you can implement your logic to filter results based on the input values
  
  var results = [
    { name: "Result 1", category: "category1" },
    { name: "Result 2", category: "category2" },
    { name: "Result 3", category: "category3" },
    { name: "Result 4", category: "category1" },
    { name: "Result 5", category: "category2" }
  ];
  
  var filteredResults = results.filter(function(result) {
    return (result.name.toLowerCase().includes(name.toLowerCase()) && (category === "" || result.category === category));
  });
  
  displayResults(filteredResults);
}

function displayResults(results) {
  var resultsList = document.getElementById("results");
  resultsList.innerHTML = "";
  
  results.forEach(function(result) {
    var listItem = document.createElement("li");
    listItem.innerHTML = "<span>Name:</span>" + result.name + ", <span>Category:</span>" + result.category;
    resultsList.appendChild(listItem);
  });
}

function scrollModalToTop() {
  var modal = document.getElementById('myModal0');
  modal.scrollTop = 0;
}

function scrollModalToTop1() {
  var modal1 = document.getElementById('myModal1');
  modal1.scrollTop = 0;
}

function scrollModalToTop2() {
  var modal2 = document.getElementById('myModal2');
  modal2.scrollTop = 0;
}

//nav animation
const header = document.querySelector("header");
console.log(header);
const sectionOne = document.querySelector(".page-intro");
console.log(sectionOne);

const sectionOneOptions = {
  rootMargin: "-300px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver (function (entries, sectionOneObserver) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      console.log(entry.target);
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  })
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);

















