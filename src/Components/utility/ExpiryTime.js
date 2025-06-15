// I want to calculate how much time is left to expire the food item

const now = new Date();

export const ExpiryTime = ({ expiryDate }) => {
 if (now > expiryDate) {
  return ("Item is expired");
} else {
  return false;
}
}