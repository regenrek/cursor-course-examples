const form = document.getElementById("meal-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const mealName = document.getElementById("meal-name").value;
  const mealTime = document.getElementById("meal-time").value;

  if (mealName && mealTime) {
    addMealToList(mealName, mealTime);

    // Clear the input fields
    document.getElementById("meal-name").value = "";
    document.getElementById("meal-time").value = "";
  }
});

// Pure function for creating meal item
function createMealElement(mealName, mealTime) {
  const mealItem = document.createElement("li");
  mealItem.textContent = `${mealName} at ${mealTime}`;
  return mealItem;
}

// Function to add meal to list
function addMealToList(mealName, mealTime) {
  const mealList = document.getElementById("meals");
  const mealItem = createMealElement(mealName, mealTime);
  mealList.appendChild(mealItem);
}

// Use array methods instead of for loop
const meals = ["Breakfast", "Lunch", "Dinner"];
meals.forEach((meal) => console.log(`Meal: ${meal}`));
