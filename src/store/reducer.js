const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Elecronics', description: 'hi im electronics' },
    { name: 'food', displayName: 'Food', description: 'hi im food' },
    { name: 'clothing', displayName: 'Clothing', description: 'hi im clothes' },
  ],
  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5, img: 'https://www.lg.com/my/images/tvs/md06121056/gallery/medium01.jpg' },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15, img: 'https://pluspng.com/img-png/radio-hd-png-radio-picture-png-image-500.png' },
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25, img: 'https://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8117.png' },
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10, img: 'https://www.pngfind.com/pngs/m/14-143267_socks-png-background-image-sock-transparent-png.png' },
    { name: 'Apples', category: 'food', price: .99, inStock: 500, img: 'https://e1.pngegg.com/pngimages/23/306/png-clipart-new-s-two-red-apples-thumbnail.png' },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12, img: 'https://w7.pngwing.com/pngs/439/922/png-transparent-chicken-egg-yolk-egg-eggshell-broken-egg-easter-eggs.png' },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90, img: 'https://toppng.com/uploads/preview/bread-png-image-loaf-of-bread-11563103187ssm8yazedr.png' },
  ],
  activeCategory: '',
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CATEGORY':
      const activeCategory = payload;
      return { ...state, activeCategory };

    default:
      return state;
  }
};


//Actions
export const triggerActive = (category) => {
  return {
    type: 'CATEGORY',
    payload: category,
  };
};

