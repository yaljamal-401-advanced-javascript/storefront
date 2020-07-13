
//add cart action
export const addToCart = (id) => {
  return {
    type: 'ADD_TO_CART',

  };
};
//remove item action
export const removeItem = (id) => {
  return {
    type: 'REMOVE_ITEM',
    id: id,
  };
};
//subtract qt action
export const subtractQuantity = (id) => {
  return {
    type: 'SUB_QUANTITY',
    id: id,
  };
};
//add qt action
export const addQuantity = (id) => {
  return {
    type: 'ADD_QUANTITY',
    id: id,
  };
};