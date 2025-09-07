
  document.addEventListener('DOMContentLoaded',function(){

         const addToCartBtn=document.querySelectorAll('.js-add-to-cart')
        

        
        addToCartBtn.forEach(btn=>{
            btn.addEventListener('click',function(){
                const productName=this.getAttribute('data-product-name')
                const productPrice=this.getAttribute('data-product-price')
           const productFarmer=this.getAttribute('data-product-farmer')
            const productImage=this.getAttribute('data-product-image')
      const productDiv=this.closest('.products')
      const quantitySelect=productDiv.querySelector('.select-dec')
      const quantity=quantitySelect?quantitySelect.value:'1';
            const product={
                name:productName,
                price:productPrice,
                farmer:productFarmer,
                image:productImage,
                quantity:quantity
            }
            let cart=JSON.parse(localStorage.getItem('tomatocart'))||[];
            cart.push(product);
            localStorage.setItem('tomatocart',JSON.stringify(cart));
            updateCartCount();
            window.location.href="checkout-page.html"
             })
        })
       function updateCartCount(){
        let cart=JSON.parse(localStorage.getItem('tomatocart'))||[];
        const updateCart=document.querySelector('.js-cart-quantity')
          if(updateCart){
            updateCart.textContent=cart.length;
          }
       }
       updateCartCount();
  })
      
      