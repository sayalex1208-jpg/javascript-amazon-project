export const cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
},
{
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: '1'
}
];

export function addTocart(productId) {
        let matchingitem;
        cart.forEach((cardItem) =>{
            if( productId === cardItem.productId) {
                // console.log(item);
                matchingitem = cardItem;
            }
        });

        if(matchingitem){
            matchingitem.quantity += 1;
        }else{
            // push the name and the quantity inside the cart.js
            cart.push({
            productId: productId,
            quantity: 1
            });
        }
}