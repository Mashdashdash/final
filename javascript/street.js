function createCar(speed, leftPercentage) {
  const car = document.createElement("img");
  car.src = "images/car_image.svg";
  car.classList.add("car");
  car.style.left = leftPercentage + "%"; // Set the left position using percentage
  car.style.top = "0px";
  car.speed = speed;
  return car;
}

const carContainer = document.querySelector(".car-container");

const cars = [
  createCar(1, 50),
  createCar(1.5, 100),
  createCar(2, 150),
  createCar(2.5, 200),
  createCar(3, 250),
  createCar(3.5, 300),
];

function animateCars() {
  cars.forEach(car => {
      car.style.top = (parseFloat(car.style.top) + car.speed) % (carContainer.clientHeight + car.clientHeight) + "px";
  });
  requestAnimationFrame(animateCars);
}

animateCars();