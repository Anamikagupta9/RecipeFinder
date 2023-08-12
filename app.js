/*
const appId = "745a06d9";
const appKey = "587fa387647bc8bcba261c9b03133d13";
const baseUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${appId}&app_key=${appKey}`;
const recipeContainer = document.querySelector("#recipe-container");
const txtSearch = document.querySelector("#txtSearch");
const btnFind = document.querySelector(".btn");

btnFind.addEventListener("click", () => loadRecipes(txtSearch.value));

txtSearch.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        const inputVal = txtSearch.value;
        recipeContainer.innerHTML = ""; // Clear previous results
        loadRecipes(inputVal);
    }
});

const setScrollPosition = () => {
    recipeContainer.scrollTo({ top: 0, behavior: "smooth" });
};

function loadRecipes(type = "paneer") {
    const url = baseUrl + `&q=${type}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            renderRecipes(data.hits);
            setScrollPosition(); // Scroll to the top after loading recipes
        })
        .catch((error) => console.log(error));
}

function renderRecipes(recipeList = []) {
    recipeContainer.innerHTML = ""; // Clear previous results
    recipeList.forEach((recipeObj) => {
        const {
            label: recipeTitle,
            ingredientLines,
            image: recipeImage,
        } = recipeObj.recipe;

        const steps = ingredientLines.map((step, index) => `<li>Step ${index + 1}: ${step}</li>`).join('');

        const htmlStr = `
            <div class="recipe">
                <div class="recipe-title">${recipeTitle}</div>
                <div class="recipe-image">
                    <img src="${recipeImage}" alt="Recipe">
                </div>
                <div class="recipe-text">
                    <ul>
                        ${steps}
                    </ul>
                </div>
            </div>
        `;

        recipeContainer.insertAdjacentHTML("beforeend", htmlStr);
    });
}

// Initial load
loadRecipes();*/
const appId = "745a06d9";
const appKey = "587fa387647bc8bcba261c9b03133d13";
const baseUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${appId}&app_key=${appKey}`;
const recipeContainer = document.querySelector("#recipe-container");
const txtSearch = document.querySelector("#txtSearch");
const btnFind = document.querySelector(".btn");
const loadingEle = document.querySelector("#loading");

btnFind.addEventListener("click", () => {
    toggleLoadingSpinner(true); // Show the loading spinner
    loadRecipes(txtSearch.value);
});

txtSearch.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        const inputVal = txtSearch.value;
        recipeContainer.innerHTML = ""; // Clear previous results
        toggleLoadingSpinner(true); // Show the loading spinner
        loadRecipes(inputVal);
    }
});

const toggleLoadingSpinner = (show) => {
    const loadingDiv = document.getElementById("loading");
    loadingDiv.style.display = show ? "flex" : "none";
};

const setScrollPosition = () => {
    recipeContainer.scrollTo({ top: 0, behavior: "smooth" });
};

function loadRecipes(type = "paneer") {
    const url = baseUrl + `&q=${type}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            renderRecipes(data.hits);
            toggleLoadingSpinner(false); // Hide the loading spinner
            setScrollPosition();
        })
        .catch((error) => {
            console.log(error);
            toggleLoadingSpinner(false); // Hide the loading spinner in case of an error
        });
}

function renderRecipes(recipeList = []) {
    recipeContainer.innerHTML = ""; // Clear previous results
    recipeList.forEach((recipeObj) => {
        const {
            label: recipeTitle,
            ingredientLines,
            image: recipeImage,
        } = recipeObj.recipe;

        const steps = ingredientLines.map((step, index) => `<li>Step ${index + 1}: ${step}</li>`).join('');

        const htmlStr = `
            <div class="recipe">
                <div class="recipe-title">${recipeTitle}</div>
                <div class="recipe-image">
                    <img src="${recipeImage}" alt="Recipe">
                </div>
                <div class="recipe-text">
                    <ul>
                        ${steps}
                    </ul>
                </div>
            </div>
        `;

        recipeContainer.insertAdjacentHTML("beforeend", htmlStr);
    });
}

// Initial load
loadRecipes();




