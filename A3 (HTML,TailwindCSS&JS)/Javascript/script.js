document.addEventListener("DOMContentLoaded", function () {
    // ⭐ Sticky Navigation Hiding on Scroll Down, Showing on Scroll Up ⭐
    const navbar = document.getElementById("navbar");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", function () {
        let currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            navbar.classList.add("-translate-y-full");
        } else {
            navbar.classList.remove("-translate-y-full");
        }

        lastScrollY = currentScrollY;
    });

    // ⭐ Hero Section Image Slider ⭐
    const heroImages = [
        "./Resources/Homepage/Banner1.jpg",
        "./Resources/Homepage/Banner2.jpg",
        "./Resources/Homepage/Banner3.jpg",
        "./Resources/Homepage/Banner4.jpg",
        "./Resources/Homepage/Banner5.jpg"
    ];

    let currentImageIndex = 0;
    const heroBanner = document.querySelector(".banner-img");

    function changeHeroImage() {
        if (heroBanner) {
            currentImageIndex = (currentImageIndex + 1) % heroImages.length;
            heroBanner.src = heroImages[currentImageIndex];
        }
    }

    setInterval(changeHeroImage, 3000);

    // ⭐ Smooth Scrolling for Navigation Links ⭐
    document.querySelectorAll(".nav-links a, nav a").forEach(link => {
        link.addEventListener("click", function (e) {
            const href = this.getAttribute("href");

            if (href.startsWith("#")) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;
                    window.scrollTo({
                        top: targetSection.offsetTop - navbarHeight,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // ⭐ Today's Special Section ⭐
    const specials = {
        Monday: { deal: "Buy 2 Zinger Burgers, Get 1 Pepsi (500ml) Free!", image: "./Resources/Homepage/MondayS.jpg" },
        Tuesday: { deal: "Buy 1 Large Pizza, Get 1 Small Pizza 50% Off!", image: "./Resources/Homepage/TuesdayS.jpg" },
        Wednesday: { deal: "Family BBQ Platter - 20% Off!", image: "./Resources/Homepage/WednesdayS.jpg" },
        Thursday: { deal: "Buy Any 3 Burgers, Get 1 Free!", image: "./Resources/Homepage/ThursdayS.jpg" },
        Friday: { deal: "Order 2 Large Pizzas, Get Free Garlic Bread!", image: "./Resources/Homepage/FridayS.jpg" },
        Saturday: { deal: "Mighty Zinger + Fries + Drink Combo - 600 RS!", image: "./Resources/Homepage/SaturdayS.jpg" },
        Sunday: { deal: "Weekend Special: 15% Off on All Pizzas!", image: "./Resources/Homepage/SundayS.jpg" }
    };

    const specialText = document.querySelector("#specials .special-text");
    const specialImage = document.querySelector("#specials .special-img");

    function updateTodaysSpecial() {
        const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

        if (specials[today] && specialText && specialImage) {
            console.log(`✅ Today's special: ${today} - ${specials[today].deal}`);
            specialText.textContent = specials[today].deal;
            specialImage.src = specials[today].image;
        } else {
            console.error("❌ Error: Special section elements not found or missing data for today.");
        }
    }

    updateTodaysSpecial();
    setInterval(updateTodaysSpecial, 86400000); // 24 hours
});
