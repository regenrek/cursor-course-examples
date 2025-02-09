const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

console.error("just an error", days);
console.warn("just a warn", days);
console.log("just a log", days);

const genMealPlan = (meals) =>
  days.map((day) => ({
    day,
    meal: meals[Math.floor(Math.random() * meals.length)],
  }));

export default genMealPlan;
