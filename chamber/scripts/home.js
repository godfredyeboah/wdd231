document.addEventListener("DOMContentLoaded", () => {
    loadFeaturedBusinesses();
    loadWeather();
    loadBusinessSpotlight(); // Now properly calling the function
});

// Fetch and display featured businesses
async function loadFeaturedBusinesses() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    const featuredList = document.getElementById("featured-business-list");

    data.members.slice(0, 3).forEach(member => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} Logo" loading="lazy">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Details</a>
        `;
        featuredList.appendChild(card);
    });
}

// Fetch and display weather information
async function loadWeather() {
    const weatherInfo = document.getElementById("weather-info");
    weatherInfo.innerHTML = "<p>Loading weather data...</p>";

    try {
        // Updated API URL to include a 3-day forecast
        const response = await fetch("https://api.weatherapi.com/v1/forecast.json?key=e335b95ae48944c18c5162632251703&q=Accra&days=3");
        const data = await response.json();

        // Extract current weather details
        const iconUrl = data.current.condition.icon; // Weather icon URL
        const conditionText = data.current.condition.text; // Weather condition
        const currentTemp = data.current.temp_c; // Current temperature

        // Extract forecast data
        let forecastHTML = `<h3>3-Day Forecast:</h3>`;
        data.forecast.forecastday.forEach(day => {
            forecastHTML += `
                <div class="forecast-item">
                    <p><strong>${day.date}</strong></p>
                    <img src="https:${day.day.condition.icon}" alt="${day.day.condition.text}">
                    <p>${day.day.condition.text}</p>
                    <p>Max: ${day.day.maxtemp_c}°C | Min: ${day.day.mintemp_c}°C</p>
                </div>
            `;
        });

        // Update weather section with both current and forecast data
        weatherInfo.innerHTML = `
            <h3>Current Weather</h3>
            <p>${data.location.name}, ${data.location.country}</p>
            <img src="https:${iconUrl}" alt="${conditionText}" width="50">
            <p>Temperature: ${currentTemp}°C</p>
            <p>Condition: ${conditionText}</p>
            <div class="forecast-container">
                ${forecastHTML}
            </div>
        `;
    } catch (error) {
        console.error("Weather API error:", error);
        weatherInfo.innerHTML = "<p>Weather data unavailable.</p>";
    }
}

// Fetch and display business spotlights
async function loadBusinessSpotlight() {
    console.log("Loading Business Spotlight...");
    const spotlightList = document.getElementById("business-spotlight-list");

    try {
        const response = await fetch("data/members.json");
        if (!response.ok) throw new Error("Failed to load members.json");
        
        const data = await response.json();
        console.log("Loaded data:", data);

        if (!data.members || data.members.length === 0) {
            console.error("No members found in JSON.");
            spotlightList.innerHTML = "<p>No spotlight businesses available.</p>";
            return;
        }

        // Shuffle and pick 2 businesses
        const shuffled = [...data.members].sort(() => 0.5 - Math.random());
        const spotlightBusinesses = shuffled.slice(0, 2);

        spotlightList.innerHTML = ""; // Clear previous content
        spotlightBusinesses.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name} Logo" onerror="this.onerror=null; this.src='images/default.jpg';" loading="lazy">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Details</a>
            `;
            spotlightList.appendChild(card);
        });

    } catch (error) {
        console.error("Error loading business spotlight:", error);
        spotlightList.innerHTML = "<p>Error loading spotlight businesses.</p>";
    }
}

// Morphy hamburger Menu and Main Nav fade Animation
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const mainNav = document.querySelector("#main-nav ul");

    menuToggle.addEventListener("click", () => {
        mainNav.classList.toggle("show");
        menuToggle.classList.toggle("open"); // 🔁 Toggle the hamburger animation
    });
});