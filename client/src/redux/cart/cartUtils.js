export const addItem = (cartItems, cartItemToAdd) => {
  const existing = cartItems.find(Item => cartItemToAdd.id === Item.id);
  if (existing) {
    return cartItems.map(cartItem =>
      cartItemToAdd.id === cartItem.id
        ? { ...cartItem, quantity: parseInt(cartItem.quantity + 1) }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    item => item.id === cartItemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return [...cartItems.filter(item => item.id !== cartItemToRemove.id)];
  }
  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
