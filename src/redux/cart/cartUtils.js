export const addItem = (cartItems, cartItemToAdd) => {
  const existing = cartItems.find(Item => cartItemToAdd.id === Item.id);
  if (existing) {
    return cartItems.map(cartItem =>
      cartItemToAdd.id === cartItem.id
        ? { ...cartItem, quantity: parseInt(cartItem.quantity+1) }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
