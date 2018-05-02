
let totalPrice = (order) =>{
  const shipping = 50
  const gst = .05
  let basePrice = order.cart.reduce((prev, curr)=> curr.price + prev, 0)
  let taxation = basePrice * gst 
  basePrice = basePrice + taxation
  return basePrice < 250 ? basePrice + shipping : basePrice
}



module.exports = totalPrice