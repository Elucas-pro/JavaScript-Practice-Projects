import generator from "generate-password-browser";

/* Library used : https://www.npmjs.com/package/generate-password-browser?activeTab=readme */

/* Generates a password depending on checked password options. */

document.getElementById("generatePSW").addEventListener("click", () => {
  const uppercase = document.getElementById("uppercase").checked;
  const lowercase = document.getElementById("lowercase").checked;
  const symbols = document.getElementById("symbols").checked;
  const numbers = document.getElementById("numbers").checked;

  const password = generator.generate({
    length: 50,
    lowercase: lowercase,
    uppercase: uppercase,
    symbols: symbols,
    numbers: numbers,
    strict: true,
  });

  document.getElementById("result").textContent = password;
});
