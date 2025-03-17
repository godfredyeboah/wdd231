document.addEventListener("DOMContentLoaded", () => {
    const directory = document.getElementById("directory");
    const gridViewBtn = document.getElementById("gridView");
    const listViewBtn = document.getElementById("listView");
    const categoryButton = document.getElementById("categoryButton");
    const categoryList = document.getElementById("categoryList");

    let allMembers = []; // Store all businesses globally

    async function fetchMembers() {
        const response = await fetch("data/members.json");
        const data = await response.json();
        allMembers = data.members; // Store all businesses
        displayMembers(allMembers); // Display all members initially
        populateCategories(allMembers); // Populate dropdown with unique categories
    }

    function displayMembers(members) {
        directory.innerHTML = "";
        members.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name} Logo">
                <h3>${member.name}</h3>
                <div class="info-container">
                    <p class="address">${member.address}</p>
                    <p class="phone">${member.phone}</p>
                    <a href="${member.website}" target="_blank" class="details-link">Details</a>
                    <p class="category">Category: ${member.category}</p>
                </div>
            `;

            directory.appendChild(card);
        });
    }

    function populateCategories(members) {
        const categories = [...new Set(members.map(member => member.category))];
        categoryList.innerHTML = "";

        // Add "All Categories" option to reset the filter
        const allOption = document.createElement("li");
        allOption.textContent = "All Categories";
        allOption.addEventListener("click", () => {
            displayMembers(allMembers); // Reset to show all businesses
            categoryList.classList.add("hidden");
        });
        categoryList.appendChild(allOption);

        // Add each category to the dropdown
        categories.forEach(category => {
            const li = document.createElement("li");
            li.textContent = category;
            li.addEventListener("click", () => {
                filterByCategory(category);
                categoryList.classList.add("hidden");
            });
            categoryList.appendChild(li);
        });
    }

    function filterByCategory(category) {
        const filteredMembers = allMembers.filter(member => member.category === category);
        displayMembers(filteredMembers);
    }

    // Toggle category dropdown visibility
    categoryButton.addEventListener("click", () => {
        categoryList.classList.toggle("hidden");
    });

    gridViewBtn.addEventListener("click", () => {
        directory.classList.remove("list-view");
        directory.classList.add("grid-view");
        gridViewBtn.classList.add("active");
        listViewBtn.classList.remove("active");
    });

    listViewBtn.addEventListener("click", () => {
        directory.classList.remove("grid-view");
        directory.classList.add("list-view");
        listViewBtn.classList.add("active");
        gridViewBtn.classList.remove("active");
    });

    fetchMembers();
});
