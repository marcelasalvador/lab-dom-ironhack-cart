// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');
  const price = priceElement.innerHTML;
  const quantity = quantityElement.value;

  let subtotal = price * quantity;

  let subtotalElement = document.querySelector ('.subtotal span');
  subtotalElement.innerHTML = subtotal;

  console.log ('Calculating subtotal, yey', subtotal);
  return subtotal;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll(".product")
  let grandTotal = 0
  for (let i = 0; i < products.length; i++) {
    grandTotal += updateSubtotal(products[i])
  }
// ITERATION 3
  const calculatedTotal = document.querySelector("#total-value span")
  calculatedTotal.innerHTML = grandTotal


  
} 

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const row = target.parentNode.parentNode
  const parent = row.parentNode 
  parent.removeChild(row)

  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
