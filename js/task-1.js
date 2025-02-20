const categoriesEl = document.querySelectorAll('.item')
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach((el) =>{
    const categoriesTitle = el.querySelector("h2").textContent
    const categoriesQuantity = el.querySelectorAll("li").length
    console.log(`Category: ${categoriesTitle}`);
    console.log(`Elements: ${categoriesQuantity}`);
})