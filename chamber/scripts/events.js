document.addEventListener("DOMContentLoaded", () => {
    const pastEventsContainer = document.getElementById("past-events-gallery");

    // Move JSON data directly into JavaScript
    const pastEvents = [
        { "image": "https://www.ailly.org/wp-content/gallery/alf-seminar-22-april-2016/20160422113826_IMG_5637.JPG", "alt": "Business Networking Event" },
        { "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREdpkdc-tafsKYlYSZgmP1BNzx93MjLfafXw&s", "alt": "Entrepreneurship Workshop" },
        { "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNPueg-NkwOUudbE51UtUIZlqbNlq0EJ7VpQ&s", "alt": "Annual Business Summit" },
        { "image": "https://www.africa-newsroom.com/files/thumb/5855bc346cb1e52ab738b66df5a5bdd5.jpg/600", "alt": "Leadership Conference" },
        { "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsLp6ewTH2JDUs39qfHwXS2pKc1E7cpcDiTHTXfOsIb28Sxuu-HYel8-BYavGgpr448OE&usqp=CAU", "alt": "Leadership Conference" },
        { "image": "https://assets.isu.pub/document-structure/230626183945-8848d7f1367e36ff7ba3ae50a0a05792/v1/499fcc4fd3ca48ebfdc36aa2a5ac25a4.jpeg", "alt": "Leadership Conference" },
    ];

    pastEvents.forEach(event => {
        let img = document.createElement("img");
        img.src = event.image;
        img.alt = event.alt;
        img.loading = "lazy";
        pastEventsContainer.appendChild(img);
    });
});
