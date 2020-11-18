export const addItemToCart = (
  cartItems,
  cartItemToAdd,
  selectedColor,
  selectedSize
) => {
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [
    ...cartItems,
    {
      ...cartItemToAdd,
      quantity: 1,
      selectedColor: selectedColor,
      selectedSize: selectedSize,
      code: "#345678",
    },
  ];
};