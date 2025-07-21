window.addEventListener("DOMContentLoaded", () => {

    let icon = document.querySelector(".icon");
    let ul = document.querySelector("ul");

    icon.addEventListener("click", () => {
        ul.classList.toggle("showData");

        if (ul.className == "showData") {
            document.getElementById("bar").className = "fa-solid fa-xmark";
        }
        else {
            document.getElementById("bar").className = "fa-solid fa-bars";
        }
    })

    // navbar

    let shops = document.getElementById("shops");
    let reviews = document.getElementById("reviews");
    let blogs = document.getElementById("blogs");
    let contacts = document.getElementById("contacts");

    shops.addEventListener("click", () => {
        shops.style.color = "rgb(248, 148, 181)";
        reviews.style.color = "white";
        blogs.style.color = "white";
        contacts.style.color = "white";
    })

    reviews.addEventListener("click", () => {
        reviews.style.color = "rgb(248, 148, 181)";
        shops.style.color = "white";
        blogs.style.color = "white";
        contacts.style.color = "white";
    })

    blogs.addEventListener("click", () => {
        blogs.style.color = "rgb(248, 148, 181)";
        shops.style.color = "white";
        reviews.style.color = "white";
        contacts.style.color = "white";
    })

    contacts.addEventListener("click", () => {
        contacts.style.color = "rgb(248, 148, 181)";
        shops.style.color = "white";
        reviews.style.color = "white";
        blogs.style.color = "white";
    })

    // card js

    let crd = document.querySelectorAll(".crd");
    let itemPage = document.querySelector(".itemPage");
    let container = document.querySelector(".container");
    let itemImg = document.getElementById("itemImg");
    let buyBtn = document.getElementById("buyBtn");
    let backBtn = document.getElementById("backBtn");
    let buyPage = document.querySelector(".buyPage");
    let buyText = document.querySelector(".buyText");
    let cross = document.querySelector(".cross");

    //opening itemPage for each shopping card
    crd.forEach(function (card) {
        card.addEventListener("click", function () {
            itemPage.style.display = "flex";
            container.style.display = "none";
            let imgSrc = card.querySelector("img").src;
            itemImg.src = imgSrc;
        });
    });

    //back to main page
    backBtn.addEventListener("click", function (e) {
        e.preventDefault();
        itemPage.style.display = "none";
        container.style.display = "block";
    });

    //buy now open
    buyBtn.addEventListener("click", function (e) {
        e.preventDefault();
        buyPage.style.display = "block";

        buyText.innerHTML = `
        <h3>Enter Your Details</h3>
        <input type="text" id="buyName" placeholder="Enter Your Name">
        <input type="text" id="buyAddress" placeholder="Enter Your Address">
        <input type="text" id="buyNum" placeholder="Enter Your Mobile Number">
        <h3>Select Payment Method</h3>
        <select id= "payment">
            <option value="Google-Pay">Google Pay</option>
            <option value="Phone-Pay">PhonePe</option>
            <option value="Bharat-Pay">Bharat Pay</option>
            <option value="Cash-on-Delivery">Cash on Delivery</option>
        </select>
        <button id="submitBtn">Submit</button>
        
        `;

        //submit button click

        document.getElementById("submitBtn").addEventListener("click", function () {
            let name = document.getElementById("buyName").value.trim();
            let address = document.getElementById("buyAddress").value.trim();
            let num = document.getElementById("buyNum").value.trim();

            if (name === "" || address === "" || num === "") {
                alert("Please fill in all the details.");
            } else {
                alert("Your order has been placed! Thank you ❤️");
                buyPage.style.display = "none";
            }
        });
    });

    //cross button closing

    cross.addEventListener("click", function () {
        buyPage.style.display = "none";
    });
});
//connect
function connect() {
    let nameInput = document.getElementById("contactName");
    let numInput = document.getElementById("contactNumber");

    let name = nameInput.value.trim();
    let num = numInput.value.trim();

    if (name === "" || num === "") {
        alert("Please fill in both Name and Mobile Number 💬");
    } else {
        alert(`Thanks for connecting, ${name}! 💖 We'll reach out to you soon.`);
    }
}


