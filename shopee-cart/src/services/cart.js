async function addItem(userCart,item){
    userCart.push(item)
}

async function deleteItem(userCart,name){
    const index = userCart.findIndex((item) => item.name == name)
    if(index != -1){
        userCart.splice(index,1)
    }
}

async function removeItem(userCart,item){
    const indexFound = userCart.findIndex((i) => i.name == item.name)
    if(indexFound == -1){
        console.log("item não encontrado")
        return
    }
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity-=1
        return
    }
    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound,1)
        return
    }
    
}

async function calculateTotal(useCart){
    console.log( `Total. R$${useCart.reduce((total,item)=>total + item.subtotal(),0)}`)
}

async function displayCart(useCart){
    console.log("Display Cart:")
    useCart.forEach((item, index) => {
        console.log(`${index+1}. ${item.name} - R$${item.price} | ${item.quantity}x | Subtotal ${item.subtotal()}`)
    });
}

async function orderByName(userCart){
    userCart.sort((a,b)=>{
        if(a.name.toLowerCase() > b.name.toLowerCase()){return 1}
        if(a.name.toLowerCase() < b.name.toLowerCase()){return -1}
        return 0
    })
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
    orderByName
}