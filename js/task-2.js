'use strict';
function formatMessage(message, maxLength) {
  let lengthMessage = message.length;
  if (lengthMessage <= maxLength) {
    return message;
  } else {
    return message.slice(0, maxLength) + '...';
  }
}
console.log(formatMessage('Curabitur ligula sapien', 16)); // "Curabitur ligula..."
console.log(formatMessage('Curabitur ligula sapien', 23)); // "Curabitur ligula sapien"
console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // "Vestibulum facilisis..."
console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); // "Nunc sed turpis..."
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // "Nunc sed turpis a felis in nunc fringilla"

/*homework-01
function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  console.log(`Shipping to ${country} will cost ${totalPrice} credits!`);
}
console.log(getShippingMessage('Australia', 120, 50));
console.log(getShippingMessage('Germany', 80, 20));
console.log(getShippingMessage('Sweden', 100, 20));*/
