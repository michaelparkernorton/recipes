fetch("recipes.json")
  .then((response) => response.json())
  .then((data) => {
    // Access the recipes array from the JSON data
    const recipes = data.recipes;

    // Loop through each recipe
    recipes.forEach((recipe) => {
      // Create img element for the title
      const imgElement = document.createElement("img");
      imgElement.src = recipe.img;

      // Create h2 element for the title
      const titleElement = document.createElement("h2");
      titleElement.textContent = recipe.title;

      // Create p element for the description
      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = recipe.description;

      // Create a element for the link
      const linkElement = document.createElement("a");
      // linkElement.textContent = "View Recipe";
      linkElement.href = recipe.link;
      linkElement.target = "_blank"; // Open link in new tab

      // Create a container for each recipe
      const recipeContainer = document.createElement("div");
      recipeContainer.addEventListener("click", () => goToRecipe(recipe.link));

      recipeContainer.classList.add("recipe");
      recipeContainer.appendChild(imgElement);
      recipeContainer.appendChild(titleElement);
      recipeContainer.appendChild(descriptionElement);
      // recipeContainer.appendChild(linkElement);
      // linkElement.appendChild(recipeContainer);
      // linkElement.appendChild(imgElement)

      // Append each recipe container to the recipe-container div in HTML
      const recipeContainerDiv = document.querySelector(".recipe-container");
      recipeContainerDiv.appendChild(recipeContainer);
    });
  })
  .catch((error) => console.error("Error fetching recipes:", error));

function goToRecipe(url) {
  console.log("hello");

  window.location.href = url;
}
