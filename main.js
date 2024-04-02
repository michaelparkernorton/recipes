fetch('recipe.json')
  .then(response => response.json())
  .then(recipe => {
		console.log(recipe)
    // Create h2 element for the title
    const titleElement = document.createElement('h2');
    titleElement.textContent = recipe.title;

    // Create p element for the description
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = recipe.description;

    // Create a element for the link
    const linkElement = document.createElement('a');
    linkElement.textContent = "View Recipe";
    linkElement.href = recipe.link;
    linkElement.target = "_blank"; // Open link in new tab

		console.log(titleElement);

    // Append elements to the container
    const recipeContainer = document.createElement('div');
		recipeContainer.classList.add('recipe');
    recipeContainer.appendChild(titleElement);
    recipeContainer.appendChild(descriptionElement);
    recipeContainer.appendChild(linkElement);

		// Append container to the recipe-container div in HTML
    const recipeContainerDiv = document.querySelector('.recipe-container');
    recipeContainerDiv.appendChild(recipeContainer);
  })
  .catch(error => console.error('Error fetching recipe:', error));