fetch ("https://dummyjson.com/recipes")
      .then (function (response) {
      return response.json()})
      .then (function (result) {
      return result.recipes})
      .then(function (result){
       console.log(result);

       
       let allDesserts = result.filter(recepti => recepti.tags.includes("Dessert"));
       console.log(allDesserts);

       let getNames = result.filter(recepti => recepti.name && recepti.reviewCount >=30);
       console.log(getNames);

       let cimet = result.filter(recepti => recepti.ingredients.includes('Cinnamon'));
       console.log(cimet); 

       let lunchDinner = result.filter(recepti => recepti.mealType.includes("Lunch") && recepti.mealType.includes('Dinner'));
       console.log(lunchDinner);

       let mangoSalsaIng = result.filter(recepti => recepti.name === "Mango Salsa Chicken")[0].ingredients;
       console.log(mangoSalsaIng);


       let usaCusine = result.filter (recepti => recepti.cuisine === 'American');
       let avgCalories = usaCusine.reduce ((acc, recepti) => acc + recepti.caloriesPerServing, 0)/usaCusine.length;
       console.log(`Average Calories in American cuisine is ${avgCalories} calories.`);


       let pasta = result.filter (recepti => recepti.tags.includes('Pasta'));
       let avgTime = pasta.reduce ((acc, recepti) => acc + recepti.cookTimeMinutes, 0)/pasta.length;
       console.log(`Average cooking time pasta is ${avgTime} minutes.`);

       let lowestReview = result.find (recepti => recepti.
        reviewCount >= 0);
        console.log(lowestReview);


      })
      

   


    