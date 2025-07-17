/*let cart=[];
let productsHTML='';
products.forEach((product)=>{


productsHTML=productsHTML+`
<div class="whole-products">
        <h1 class="featured-heading">Featured products</h1>
        <div class="lists">
            <div class="products">
            <img src="${product.image}" width="250px" >
                <h3 class="side-heading">"${product.name}"</h3>
                <h4>₹ ${(product.priceCents/100).toFixed(2)}</h4>
                <h4>By farmer:Ranjith</h4>
                <div class="total-select-dec">
                 <select class="select-dec">
                    <option selected value="250gms">250gms</option>
                    <option  value="500gms">500gms</option>
                    <option value="1kg">1kg</option>
                    <option  value="2kg">2kg</option>
                </select>
                <br><br>
                </div>
                <button class="shopbutton js-add-to-cart"
                data-product-name="${product.name}">Add to cart
                
                </button>
                
            </div>
`
})
document.querySelector('.lists').innerHTML=productsHTML;
function updateCartQuantity(){
let cartQuantity=0;
cart.forEach((item)=>{
  cartQuantity+=item.quantity;
  
})
    document.querySelector('.js-cart-quantity').innerHTML=cartQuantity
  
  
}

document.querySelectorAll('.js-add-to-cart')
.forEach((button)=>{
  button.addEventListener('click',()=>{
    const productName=button.dataset.productName;
    let matchingItem;
    cart.forEach((item)=>{
      if(productName===item.productName){
        matchingItem=item;
      }
    });
     if(matchingItem){
      matchingItem.quantity+=1
     }
     else{
      cart.push({
        productName:productName,
        quantity:1
      })
     }
     updateCartQuantity();
    });
  });*/

let cart=JSON.parse(localStorage.getItem('cart'))||[];
function updateCartQuantity(){
  let totalQuantity=0;
  cart.forEach(item=>{
    totalQuantity+=item.quantity;
    })
  document.querySelector('.js-cart-quantity').innerText=totalQuantity;

}
document.querySelectorAll('.js-add-to-cart')
.forEach((button)=>{
  button.addEventListener('click',()=>{
    const productName=button.dataset.productName;
    let matchingItem= cart.find(item=>productName===item.productName)
      
      
    
     if(matchingItem){
      matchingItem.quantity+=1
     }
     else{
      cart.push({
        productName:productName,
        quantity:1
      })
     }
     localStorage.setItem('cart',JSON.stringify(cart));
     updateCartQuantity();
    });
  });
  updateCartQuantity();