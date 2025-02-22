import showReview from "./show_review";

let star_review = document.getElementById("star-rating");
let review_form = document.getElementById("reviewForm");

new Array(5).fill(0).map(() => {
  star_review.innerHTML += `
    <svg class="w-5 h-5 ms-1 text-gray-300 fill-gray-300 star" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
  `;
});

let stars = document.querySelectorAll(".star");
let given_star = document.getElementById("given_star");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    given_star.value = index + 1;
    stars.forEach((s, i) => {
      if (i <= index) {
        s.classList.remove("fill-gray-300", "text-gray-300");
        s.classList.add("fill-yellow-400", "text-yellow-400");
      } else {
        s.classList.remove("fill-yellow-400", "text-yellow-400");
        s.classList.add("fill-gray-300", "text-gray-300");
      }
    });
  });
});

function resetStars() {
  stars.forEach((star) => {
    star.classList.remove("fill-yellow-400", "text-yellow-400");
    star.classList.add("fill-gray-300", "text-gray-300");
  });
  given_star.value = 0;
}

review_form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(review_form);
  let dataObject = Object.fromEntries(data.entries());
  showReview(dataObject);
  review_form.reset();
  resetStars();
});
showReview({});
