const display = document.querySelector("#display");

const backSpace= () => {
  display.value = display.value.slice(0, -1);
}
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
