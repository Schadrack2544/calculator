const display = document.querySelector("#display");

const clearDisplay = () => {
  display.value = "";
};

const appendToDisplay = (value) => {
  display.value += value;
};

const calculate = () => {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
};
