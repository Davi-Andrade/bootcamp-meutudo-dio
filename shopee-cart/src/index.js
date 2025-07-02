import createItem from "./services/item.js"
import * as cartService from "./services/cart.js"

const car = []

const item1 = await createItem("Carrinho",39.99,3)
const item2 = await createItem("Boneca",35.99,2)
const item3 = await createItem("avião",15,2)

await cartService.addItem(car,item1)
await cartService.addItem(car,item2)
await cartService.addItem(car,item3)
await cartService.removeItem(car,item1)
await cartService.removeItem(car,item2)
await cartService.displayCart(car)

console.log("\nOrdem alfabetica nome:")
await cartService.orderByName(car)
await cartService.displayCart(car)

await cartService.calculateTotal(car)

console.log(process.env.DATABASE)
