import generator from "generate-password-browser";

document.getElementById("generatePSW").addEventListener("click", () => {
  const uppercase = document.getElementById("uppercase").checked;
  const lowercase = document.getElementById("lowercase").checked;
  const symbols = document.getElementById("symbols").checked;
  const numbers = document.getElementById("numbers").checked;

  const password = generator.generate({
    length: 50,
    numbers: numbers,
    lowercase: lowercase,
    symbols: symbols,
    numbers: numbers,
    strict: true,
  });

  document.getElementById("result").textContent = password;
});
