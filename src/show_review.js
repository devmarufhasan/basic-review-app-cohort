let review_list = document.getElementById("review_list");
let reviews = [];
export default function showReview(dataObject) {
  if (Object.keys(dataObject).length > 0) {
    reviews = [dataObject, ...reviews];
  }

  let content = reviews
    .map((review) => {
      return `
        <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6 relative">
          <div class="flex items-start justify-between">
              <div class="flex items-center">
                  <div class="flex">
                     ${new Array(5)
                       .fill(0)
                       .map((_, index) => {
                         return `
                       <svg
                         class="w-5 h-5 ms-1 ${
                           index < review.given_star
                             ? "text-yellow-300 fill-yellow-300"
                             : "text-gray-300 fill-gray-300"
                         } star"
                         aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 22 20"
                       >
                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                       </svg>`;
                       })
                       .join("")}
                  </div>
              </div>
              <button class="text-gray-400 hover:text-red-500 transition duration-300 delete-review-btn">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
              </button>
          </div>
          <p class="mt-4 text-gray-600">${review.review_message}</p>
        </div>
      `;
    })
    .join("");

  if (!reviews.length > 0) {
    content = `<p class="mt-4 text-gray-600 text-center">No Reviews</p>`;
  }

  review_list.innerHTML = content;
  let deleteButtons = document.querySelectorAll(".delete-review-btn");

  deleteButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      reviews.splice(index, 1);
      showReview({});
    });
  });
}
