let foodList = [
    {
        id: 1,
        name: "Red Bubble Cafe By Purple Foods",
        culsine: "Beverages, Desserts",
        rating: 4.9,
        imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bjg980e2fespxqktcdlm",
        time: "35 MINS",
        price: "₹500 FOR TWO"
    },
    {
        id: 2,
        name: "Cake Hut",
        culsine: "Bakery, Desserts",
        rating: 4.7,
        imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ehyfl5lfl6ogclj12cr9",
        time: "20 MINS",
        price: "₹250 FOR TWO"
    },
    {
        id: 3,
        name: "Kismath Restaurant",
        culsine: "Biryani, Chinese",
        rating: 3.5,
        imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qbaooyu1av9clbuli7yb",
        time: "45 MINS",
        price: "₹180 FOR TWO"
    },
    {
        id: 4,
        name: "Pallath Restaurant",
        culsine: "South Indian",
        rating: 2.9,
        imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/amc7bdmi4vr9ckyyiart",
        time: "25 MINS",
        price: "₹100 FOR TWO"
    },
    {
        id: 5,
        name: "Usmans",
        culsine: "South Indian, Arabian",
        rating: 3.7,
        imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/gfunnisadym2gfnhpqus",
        time: "25 MINS",
        price: "₹100 FOR TWO"
    },
    {
        id: 6,
        name: "Thaal Kitchen",
        culsine: "North Indian, Beverages, Biryani",
        rating: 2.5,
        imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dxpwrrsfmww25bnndgzf",
        time: "45 MINS",
        price: "₹350 FOR TWO"
    },
    {
        id: 7,
        name: "Falooda Nation",
        culsine: "Beverages",
        rating: 4.9,
        imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/8db3cb914b52c44ad8da337200746fe7",
        time: "30 MINS",
        price: "₹200 FOR TWO"
    },
    {
        id: 8,
        name: "Hyderabad Kitchen",
        culsine: "Biryani, Kerala, Arabian, Desserts",
        rating: 3.5,
        imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/u5uxo96prvul97arojx9",
        time: "25 MINS",
        price: "₹300 FOR TWO"
    },
    {
        id: 9,
        name: "Bharani Vegetarian",
        culsine: "North Indian, South Indian",
        rating: 4.2,
        imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cndsoe44e7bfmivdobxa",
        time: "30 MINS",
        price: "₹300 FOR TWO",
    },
    {
        id: 10,
        name: "NAKSHATRA PURE VEG",
        culsine: "Indian",
        rating: 3.4,
        imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ipjsuasggph9zabfsrlv",
        time: "46 MINS",
        price: "₹200 FOR TWO",
    },
    {
        id: 11,
        name: "Vishranthi",
        culsine: "Indian, South Indian",
        rating: 2.5,
        imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/knyjoetekz2ay61jvhwo",
        time: "25 MINS",
        price: "₹250 FOR TWO",
    },
    {
        id: 12,
        name: "Bakya Veg Restaurant",
        culsine: "South Indian, Chinese, North Indian",
        rating: 3.9,
        imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/w06omkzgzv8dmvbzhxxm",
        time: "48 MINS",
        price: "₹150 FOR TWO",
    },
    {
        id: 13,
        name: "Geetham Veg restaurant",
        imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ukjks4pkgniuxolng0t7",
        culsine: "Indian",
        rating: 3.5,
        time: "46 MINS",
        price: "₹250 FOR TWO",
    },
    {
        id: 14,
        name: "Hotel Saravana Bhavan",
        imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ak0pqmhlslxqpsbrdcc6",
        culsine: "South Indian, North Indian, Sweets",
        rating: 2.5,
        time: "30 MINS",
        price: "₹300 FOR TWO",
    },
    {
        id: 15,
        name: "Sangeetha Veg Restaurant",
        imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g2lo64ejsddy18l1g1mp",
        culsine: "North Indian, South Indian",
        rating: 4.5,
        time: "31 MINS",
        price: "₹450 FOR TWO",
    },
    {
        id: 16,
        name: "All Day Breakfast Company",
        imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ed141fee2d080c38deea62303010a9c2",
        culsine: "Beverages, Indian",
        rating: 3.4,
        time: "57 MINS",
        price: "₹300 FOR TWO",
    },
];
let ContainerDiv = document.querySelector(".container");
let position = document.querySelector(".position");
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

    let ratings = document.createElement("div");
    ratings.className = "rattings"
    cardsDiv.appendChild(ratings);

    let rating = document.createElement("span");
    rating.className = "rating";
    rating.innerText = e.rating;
    ratings.append(rating);

    let star = document.createElement('icon');
    star.setAttribute("class", "fa fa-star");
    rating.appendChild(star);

    if (e.rating <= 2.9) {
        rating.style.backgroundColor = "red";
    }
    else if (e.rating > 3 && e.rating <= 3.9) {
        rating.style.backgroundColor = "#db7c38";
    }
    else if (e.rating >= 4 && e.rating < 5) {
        rating.style.backgroundColor = "darkgreen";
    }
    else {
        rating.style.backgroundColor = "deeppink";
    }

    let before = document.createElement("span");
    before.style.color = "gray";
    ratings.appendChild(before);
    before.innerHTML = ".";
    before.style.fontSize = "xx-large";

    let time = document.createElement("p");
    ratings.appendChild(time);
    time.innerHTML = e.time;
    time.style.fontSize = "13px";

    let after = document.createElement("span");
    after.style.color = "gray";
    ratings.appendChild(after);
    after.innerHTML = ".";
    after.style.fontSize = "xx-large";

    let price = document.createElement("p");
    ratings.appendChild(price);
    price.innerHTML = e.price;
    price.style.fontSize = "13px";

    let itemsadd = document.createElement("div");
    itemsadd.classList.add("items");
    cardsDiv.appendChild(itemsadd);

    let btnadd = document.createElement("button");
    btnadd.setAttribute("class", "button1");
    itemsadd.appendChild(btnadd);
    btnadd.innerHTML = "ADD";

    btnadd.addEventListener("click", a => {
        btnadd.style.display = "none";

        let items = document.createElement("div");
        items.classList.add("items");
        itemsadd.appendChild(items);

        let icon1 = document.createElement("span");
        icon1.setAttribute("class", "fa fa-minus");
        items.appendChild(icon1);

        let item = document.createElement("input");
        item.classList.add("text")
        item.setAttribute("type", "text");
        item.setAttribute("value", "0");
        items.appendChild(item);


        let icon2 = document.createElement("span");
        icon2.setAttribute("class", "fa fa-plus");
        items.appendChild(icon2);

        let click = document.createElement("p");
        var itemval = parseInt(item.value);
        icon1.addEventListener("click", function () {
            if (item.value == 1) {
                items.remove();
                btnadd.style.display = "flex";
            } else {
                item.value = --itemval;
                click.innerText = `${heading.innerText} (${item.value})`;
            }
        })

        icon2.addEventListener("click", function () {
            item.value = ++itemval;
            click.innerText = `${heading.innerText} (${item.value})`;
            position.appendChild(click);
            position.style.display = "flex";
        })
    });
});
