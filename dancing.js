const wishContainer = document.getElementById("wishContainer");


const wishes = [
    "Wishing you endless happiness 🌸",
    "May your day shine as bright as the sun ☀️",
    "Lots of love, laughter, and sunshine 💛",
    "Keep blooming beautifully, just like this sunflower 🌻",
    "Cheers to a wonderful year ahead 🎉"
];

function showWishesStacked() {
    wishes.forEach((wish, i) => {
        setTimeout(() => {
            const p = document.createElement("p");
            p.textContent = wish;
            p.className = "wish";
            wishContainer.appendChild(p);


            setTimeout(() => {
                p.style.opacity = 1;
            }, 100);
        }, i * 3000);
    });

    setTimeout(() => {
        const img = document.createElement("img");
        img.src = "love.png";
        img.className = "wish";
        img.style.width = "200px";
        wishContainer.appendChild(img);

        setTimeout(() => {
            img.style.opacity = 1;
        }, 100);
    }, wishes.length * 3000);

}


window.onload = () => {
    showWishesStacked();
};