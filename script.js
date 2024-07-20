const getSumBtn = document.getElementById("getSumBtn");
const p = document.getElementById("ans")

getSumBtn.addEventListener("click", () => {
  const priceElements = document.querySelectorAll('.price');
  let totalPrice = 0;
  priceElements.forEach((priceElement) => {
    totalPrice += parseFloat(priceElement.textContent);
  });
  p.textContent = `Total Price: Rs ${totalPrice.toFixed(2)}`;
});
