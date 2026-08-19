// popup

const popup = document.querySelector("#popup");
setTimeout(() => {
  popup.classList.add("popup");
}, 3000);

function closePopup() {
  popup.classList.remove("popup");
}
popup.addEventListener("click", closePopup);

//Burger Menu
const burger = document.querySelector("#burger");
function menu() {
  const navItems = document.querySelectorAll(".nav-item");
  for (const navItem of navItems) {
    if (navItem.classList.contains("nav-item-show")) {
      navItem.classList.remove("nav-item-show");
    } else {
      navItem.classList.add("nav-item-show");
    }
  }
}
burger.addEventListener("click", menu);

// comments
const commentList = [
  {
    name: "پیمان",
    content:
      "غذاها واقعاً خوش‌طعم بودن، مخصوصاً برگر و سوخاری. کیفیت مواد اولیه خوب بود و نوشیدنی‌ها هم کنار غذا خیلی می‌چسبید در کل تجربه خیلی خوبی بود.",
    image: "peyman.png",
  },
  {
    name: "ملیکا",
    content:
      "من خیلی از تنوع منو خوشم اومد, پیتزا و برگرها طعم خوبی داشتن و سوخاری هم ترد و خوشمزه بود نوشیدنی‌ها هم کیفیت خوبی داشتن و در مجموع راضی بودم. ",
    image: "melika.png",
  },
  {
    name: "محسن",
    content:
      "کیفیت غذاها نسبت به چیزی که انتظار داشتم خیلی خوب بود. برگرها خوش‌طعم و پیتزاها تازه بودن و سوخاری هم خوب و ترد سرو شده بود. در کل منوی کاملی داره.",
    image: "mohsen.png",
  },
  {
    name: "امید",
    content:
      "هم طعم غذاها خوب بود هم ظاهرشون اشتهابرانگیز. پیتزا و برگر رو بیشتر دوست داشتم و سوخاری هم خیلی خوشمزه بود. نوشیدنی‌ها هم تنوع خوبی داشتن. ",
    image: "omid.png",
  },
  {
    name: "حمید",
    content:
      "غذاها کیفیت خوبی داشتن و حجمشون هم مناسب بود. برگر و سوخاری مخصوصاً خوشمزه بودن و پیتزا هم طعم خوبی داشت. نوشیدنی‌ها هم مکمل خوبی برای غذا بودن",
    image: "hamid.png",
  },
  {
    name: "رویا",
    content:
      "در مجموع تجربه خوبی داشتم. غذاها تازه و خوش‌طعم بودن و تنوع منو باعث میشه هر سلیقه‌ای بتونه غذای مورد علاقه‌ش رو پیدا کنه. برگر، پیتزا و سوخاری همگی کیفیت قابل قبولی داشتن",
    image: "roya.png",
  },
];
const result = commentList
  .map(function (comment) {
    return `<figure class="comment-item">
            <img
              src="./images/${comment.image}"
              class="comment-item-image"
              alt="${comment.name}"
            />
            <figcaption class="comment-item-text">
              <h3>${comment.name}</h3>
              <p>${comment.content}</p>
            </figcaption>
          </figure>`;
  })
  .join("");
const commentItemsDiv = document.querySelector("#comment-items");
commentItemsDiv.innerHTML = result;
const comments = document.querySelectorAll(".comment-item");

const observer = new IntersectionObserver(
  function (items) {
    for (const item of items) {
      if (item.isIntersecting) {
        item.target.classList.add("comment-item-animation");
      } else {
        item.target.classList.remove("comment-item-animation");
      }
    }
  },
  {
    threshold: 0.1,
  },
);

for (const comment of comments) {
  observer.observe(comment);
}
