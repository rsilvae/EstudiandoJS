function calculateDiscuntedPrice ( price,discountPercentage){
    const discount = (price * discountPercentage)/ 100
    const priceWithDiscount = price -discount
    return priceWithDiscount
}

const originalPrice = 100
const discount = 10
const finalPrice = calculateDiscuntedPrice(originalPrice,discount)

console.log('Original Price: $ '+originalPrice)
console.log('Discount: '+ discount+'%')
console.log('Final Price: $'+ finalPrice)