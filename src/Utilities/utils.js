import toast from "react-hot-toast";
export const getFavorite = () => {
  let favoriteBook = [];
  const storedItem = localStorage.getItem("book");
  if (storedItem) {
    favoriteBook = JSON.parse(storedItem);
  }
  return favoriteBook;
};
export const setFavorite = (phone) => {
  const favData = getFavorite();
  const isExist = favData.find((b) => b.id === phone.id);
  if (isExist) return toast.error("Book already added.");
  favData.push(phone);
  toast.success("Book successfully added");
  localStorage.setItem("book", JSON.stringify(favData));
};
export const removeFavorite = (phone) => {
  const favData = getFavorite();
  const remainingFav = favData.filter((b) => b.id !== phone.id);
  localStorage.setItem("book", JSON.stringify(remainingFav));
};
export const getCart = () => {
  let carts = [];
  const cartItem = localStorage.getItem("cart");
  if (cartItem) {
    carts = JSON.parse(cartItem);
  }
  return carts;
};
export const setCart = (phones) => {
  const phoneData = getCart();
  const isExist = phoneData.find((p) => p.id === phones.id);
  if (isExist) return toast.error("Item already added");
  phoneData.push(phones);
  toast.success("Add to cart successfully");
  localStorage.setItem("cart", JSON.stringify(phoneData));
};
