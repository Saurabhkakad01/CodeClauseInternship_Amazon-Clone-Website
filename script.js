document.getElementById("searchInput").addEventListener("input", function () {
  var searchValue = this.value.toLowerCase();
  var itemss = document.getElementsByClassName("itemm");

  for (var i = 0; i < itemss.length; i++) {
    var itemm = itemss[i];
    var text = itemm.textContent.toLowerCase();

    if (text.includes(searchValue)) {
      itemm.style.display = "inline-block";
    } else {
      itemm.style.display = "none";
    }
  }
});

//Today's Deals section
const dealsData = [
  {
    title: "Stylish Pant for Men",
    price: "$539 and under",
    image: "deals1.jpg",
  },
  {
    title: "Oppo A78 4G Starting at 14999,Including other Offers",
    price: "28% off",
    image: "deals2.jpg",
  },
  {
    title: "Best Deals on boAt Smartwatches",
    price: "Up to 85% off",
    image: "deals3.jpg",
  },
  {
    title: "Oppo F23 5G Starting at 20700,Including other Offers",
    price: "21% off",
    image: "deals4.jpg",
  },
  {
    title: "Mega Deals on Cockatoo - Fitness Accessories, Treadmils & More",
    price: "Up to 67% off",
    image: "deals5.jpg",
  },
  {
    title: "Marc Loire,Monrow and More",
    price: "$599 and under",
    image: "deals6.jpg",
  },
  {
    title: "Trendy Totes & Bags:Miraggio...",
    price: "$739 and under",
    image: "deals7.jpg",
  },
];
function displayDeals() {
  const dealContainer = document.getElementById("dealContainer");

  dealsData.forEach((deal) => {
    const dealElement = document.createElement("div");
    dealElement.classList.add("deal");

    const imageElement = document.createElement("img");
    imageElement.src = deal.image;
    imageElement.alt = deal.title;

    const titleElement = document.createElement("h3");
    titleElement.textContent = deal.title;

    const priceElement = document.createElement("p");
    priceElement.textContent = deal.price;

    dealElement.appendChild(imageElement);
    dealElement.appendChild(titleElement);
    dealElement.appendChild(priceElement);

    dealContainer.appendChild(dealElement);
  });
}
window.onload = displayDeals;
