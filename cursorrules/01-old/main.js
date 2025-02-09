var form = document.getElementById("meal-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  var mealName = document.getElementById("meal-name").value;
  var mealTime = document.getElementById("meal-time").value;

  if (mealName && mealTime) {
    var mealList = document.getElementById("meals");
    var mealItem = document.createElement("li");
    mealItem.textContent = mealName + " at " + mealTime;
    mealList.appendChild(mealItem);

    // Clear the input fields
    document.getElementById("meal-name").value = "";
    document.getElementById("meal-time").value = "";
  }
});

// Example of a function with side effects
function addMealToList(mealName, mealTime) {
  var mealList = document.getElementById("meals");
  var mealItem = document.createElement("li");
  mealItem.textContent = mealName + " at " + mealTime;
  mealList.appendChild(mealItem);
}

// Example of using a for loop instead of array methods
var meals = ["Breakfast", "Lunch", "Dinner"];
for (var i = 0; i < meals.length; i++) {
  console.log("Meal: " + meals[i]);
}
