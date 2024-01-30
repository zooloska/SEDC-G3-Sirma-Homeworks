fetch ("https://dummyjson.com/products")
      .then (function (response) {
      return response.json()
     })
      .then (function (result) {
       return result.products })
       .then(function (result){
        console.log(result);

       let laptopsDescending = result.filter (item => item.category === 'laptops').toSorted ((a, b) => b.price - a.price);
       console.log(laptopsDescending);

       let firstItem = result.find (item => item.category === 'groceries');
       console.log(firstItem);
       
       let firstSamsung = result.findIndex (item => item.category === "smartphones" && item.brand === 'Samsung')
       console.log(firstSamsung);

       let checkBrand = result.some(item => item.brand === 'Sony')
       console.log(checkBrand);

       let skinCare = result.filter (item => item.category === 'skincare').sort((a,b) => b.rating - a.rating).map(item => item.brand)[0];
       console.log(skinCare);

       let avgDiscProducts = result.filter(item => item.rating >= 4.5);
       let discProducts = avgDiscProducts.reduce((acc, item) => acc + item.discountPercentage, 0)/avgDiscProducts.length;
       console.log(discProducts);

       let highProduct = result.toSorted ((a,b) => b.price - a.price).map(item => item)[0];
       console.log(highProduct);



       let avgIphone = result.filter(item => item.category === 'smartphones' && item.brand === 'Apple');
       let priceAvg = avgIphone.reduce((acc, item) => acc + item.price, 0)/avgIphone.length;
       console.log(`Average iPhone price: ${priceAvg}$`);




       let lowProduct = result.toSorted((a,b) => a.price - b.price).map(item => item)[0];
       console.log(lowProduct);


    })
