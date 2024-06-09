const recipes = [
    { name: 'Pasta', ingredients: ['pasta', 'tomato', 'cheese'] },
    { name: 'Tomato Soup', ingredients: ['tomato', 'onion', 'garlic'] },
    { name: 'Grilled Cheese', ingredients: ['bread', 'cheese', 'butter'] },
    { name: 'Salad', ingredients: ['lettuce', 'tomato', 'cucumber'] },
    { name: 'Omelette', ingredients: ['egg', 'cheese', 'milk'] },
];


const ingredientForm = document.getElementById('ingredient-form');
const ingredientsInput = document.getElementById('ingredients-input');
const recipeList = document.getElementById('recipe-list');
const favoriteRecipesList = document.getElementById('favorite-recipes');


let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];


displayFavoriteRecipes();

ingredientForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const ingredients = ingredientsInput.value.split(',').map(item => item.trim().toLowerCase());
    displayRecipes(findRecipes(ingredients));
});

function findRecipes(ingredients) {
    return recipes.filter(recipe => 
        ingredients.every(ingredient => recipe.ingredients.includes(ingredient))
    );
}

function displayRecipes(recipes) {
    recipeList.innerHTML = '';
    if (recipes.length === 0) {
        recipeList.innerHTML = '<li>No recipes found</li>';
    } else {
        recipes.forEach(recipe => {
            const li = document.createElement('li');
            li.textContent = recipe.name;

            const favoriteButton = document.createElement('button');
            favoriteButton.textContent = 'Favorite';
            favoriteButton.addEventListener('click', () => addToFavorites(recipe));
            
            li.appendChild(favoriteButton);
            recipeList.appendChild(li);
        });
    }
}

function addToFavorites(recipe) {
    if (!favoriteRecipes.some(favRecipe => favRecipe.name === recipe.name)) {
        favoriteRecipes.push(recipe);
        localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
        displayFavoriteRecipes();
    }
const recipes = [
    { name: 'Pasta', ingredients: ['pasta', 'tomato', 'cheese'] },
    { name: 'Tomato Soup', ingredients: ['tomato', 'onion', 'garlic'] },
    { name: 'Grilled Cheese', ingredients: ['bread', 'cheese', 'butter'] },
    { name: 'Salad', ingredients: ['lettuce', 'tomato', 'cucumber'] },
    { name: 'Omelette', ingredients: ['egg', 'cheese', 'milk'] },
];


const ingredientForm = document.getElementById('ingredient-form');
const ingredientsInput = document.getElementById('ingredients-input');
const recipeList = document.getElementById('recipe-list');
const favoriteRecipesList = document.getElementById('favorite-recipes');


let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];


displayFavoriteRecipes();

ingredientForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const ingredients = ingredientsInput.value.split(',').map(item => item.trim().toLowerCase());
    displayRecipes(findRecipes(ingredients));
});

function findRecipes(ingredients) {
    return recipes.filter(recipe => 
        ingredients.every(ingredient => recipe.ingredients.includes(ingredient))
    );
}

function displayRecipes(recipes) {
    recipeList.innerHTML = '';
    if (recipes.length === 0) {
        recipeList.innerHTML = '<li>No recipes found</li>';
    } else {
        recipes.forEach(recipe => {
            const li = document.createElement('li');
            li.textContent = recipe.name;

            const favoriteButton = document.createElement('button');
            favoriteButton.textContent = 'Favorite';
            favoriteButton.addEventListener('click', () => addToFavorites(recipe));
            
            li.appendChild(favoriteButton);
            recipeList.appendChild(li);
        });
    }
}

function addToFavorites(recipe) {
    if (!favoriteRecipes.some(favRecipe => favRecipe.name === recipe.name)) {
        favoriteRecipes.push(recipe);
        localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
        displayFavoriteRecipes();
    }
}

function displayFavoriteRecipes() {
    favoriteRecipesList.innerHTML = '';
    if (favoriteRecipes.length === 0) {
        favoriteRecipesList.innerHTML = '<li>No favorite recipes</li>';
    } else {
        favoriteRecipes.forEach(recipe => {
            const li = document.createElement('li');
            li.textContent = recipe.name;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => removeFromFavorites(recipe));
            
            li.appendChild(removeButton);
            favoriteRecipesList.appendChild(li);
        });
    }
}

function removeFromFavorites(recipe) {
    favoriteRecipes = favoriteRecipes.filter(favRecipe => favRecipe.name !== recipe.name);
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
    displayFavoriteRecipes();
}

}

function displayFavoriteRecipes() {
    favoriteRecipesList.innerHTML = '';
    if (favoriteRecipes.length === 0) {
        favoriteRecipesList.innerHTML = '<li>No favorite recipes</li>';
    } else {
        favoriteRecipes.forEach(recipe => {
            const li = document.createElement('li');
            li.textContent = recipe.name;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => removeFromFavorites(recipe));
            
            li.appendChild(removeButton);
            favoriteRecipesList.appendChild(li);
        });
    }
}

function removeFromFavorites(recipe) {
    favoriteRecipes = favoriteRecipes.filter(favRecipe => favRecipe.name !== recipe.name);
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
    displayFavoriteRecipes();
}
