/* eslint-disable indent */
const initialState = [
  {
    name: 'TV', category: 'electronics', price: 699.00, inStock: 5,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81t2A6uhm4L._SX466_.jpg',
  },
  {
    name: 'Radio', category: 'electronics', price: 99.00, inStock: 15,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQ28tA0axrsg-8_uwzZkD8ddxlMvrcUy3kNA&usqp=CAU',
  },
  {
    name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25,
    img: 'https://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8117.png',
  },
  {
    name: 'Socks', category: 'clothing', price: 12.00, inStock: 10,
    img: 'https://www.pngfind.com/pngs/m/14-143267_socks-png-background-img-sock-transparent-png.png',
  },
  {
    name: 'Apples', category: 'food', price: .99, inStock: 500,
    img: 'https://s3-us-west-2.amazonaws.com/melingoimages/Images/4315.jpg',
  },
  {
    name: 'Eggs', category: 'food', price: 1.99, inStock: 12,
    img: 'https://w7.pngwing.com/pngs/439/922/png-transparent-chicken-egg-yolk-egg-eggshell-broken-egg-easter-eggs.png',
  },
  {
    name: 'Bread', category: 'food', price: 2.39, inStock: 90,
    img: 'https://www.biggerbolderbaking.com/wp-content/uploads/2020/04/Hearty-Yeast-Free-Bread-WS-Thumbnail.jpg',
  },
];



///reducer
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CATEGORYTYPE':
      return [...state];


    case 'STOCKREDUCE':

      return {
        ...state, products: state.products.map(product => {
          if (product.name === payload) {
            return { ...product, inStock: product.inStock - 1 };
          } else {
            return product;
          }
        })
      };
    case 'GETPRO':
      return { ...state, products: payload.results };
    default:
      return state;
  }
};

////Actions
export const triggerActive = (category) => {
  return {
    type: 'CATEGORYTYPE',
    payload: category,
  };
};

export const triggerTheStock = (name) => {
  return {
    type: 'STOCKREDUCE',
    payload: name,
  };
};
