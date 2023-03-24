let foodList = [
    {
        id: 1,
        name: "Red Bubble Cafe By Purple Foods",
        culsine: "Beverages, Desserts",
        rating: 4.9,
        imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bjg980e2fespxqktcdlm"
    },
    {
        id: 2,
        name: "Cake Hut",
        culsine: "Bakery, Desserts",
        rating: 4.7,
        imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ehyfl5lfl6ogclj12cr9"
    },
    {
        id: 3,
        name: "Kismath Restaurant",
        culsine: "Biryani, Chinese",
        rating: 3.5,
        imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qbaooyu1av9clbuli7yb"
    },
    {
        id: 4,
        name: "Pallath Restaurant",
        culsine: "South Indian",
        rating: 2.9,
        imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/amc7bdmi4vr9ckyyiart"
    },
    {
        id: 5,
        name: "Usmans",
        culsine: "South Indian, Arabian",
        rating: 3.7,
        imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/gfunnisadym2gfnhpqus"
    },
    {
        id: 6,
        name: "Thaal Kitchen",
        culsine: "North Indian, Beverages, Biryani",
        rating: 2.5,
        imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dxpwrrsfmww25bnndgzf"
    },
    {
        id: 7,
        name: "Falooda Nation",
        culsine: "Beverages",
        rating: 4.9,
        imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/8db3cb914b52c44ad8da337200746fe7"
    },
    {
        id: 8,
        name: "Hyderabad Kitchen",
        culsine: "Biryani, Kerala, Arabian, Desserts",
        rating: 4.5,
        imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/u5uxo96prvul97arojx9"
    },
];
let ContainerDiv = document.querySelector(".container");
let rowDiv = document.createElement("div");
rowDiv.className = "row";
ContainerDiv.appendChild(rowDiv);
foodList.forEach(function (e) {
    let colDiv = document.createElement("div");
    colDiv.className = "cols";
    rowDiv.appendChild(colDiv);

    let cardsDiv = document.createElement("div");
    cardsDiv.className = "cards-list";
    colDiv.append(cardsDiv);

    let img = document.createElement("img");
    img.src = e.imgUrl;
    cardsDiv.append(img);

    let heading = document.createElement("h3");
    heading.innerText = e.name;
    cardsDiv.append(heading);

    let culsineContent = document.createElement("p");
    culsineContent.innerText = e.culsine;
    cardsDiv.append(culsineContent);

    let rating = document.createElement("span");
    rating.className = "rating";
    rating.innerText = e.rating;
    cardsDiv.append(rating);
    if (e.rating <= 2.9) {
        rating.style.backgroundColor = "red";
    }
    else if (e.rating > 3 && e.rating <= 3.9) {
        rating.style.backgroundColor = "#db7c38";
    }
    else if (e.rating >= 4 && e.rating < 5) {
        rating.style.backgroundColor = "#48c479";
    }
    else {
        rating.style.backgroundColor = "deeppink";
    }
});
