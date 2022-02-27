export const validatePrice = (currentPrice: number, price: number) => {
  if (price < currentPrice / 10) return false;
  return true;
}