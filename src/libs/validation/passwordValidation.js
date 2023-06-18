const cap = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const sim = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const sym = ["@", "#", "$"];

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let pass;

export const passwordVal = (event, error, errorMsg, isConfirmPass) => {
  //   console.log(event.target.value);
  error(false);
  errorMsg("");

  if (String(event.target.value).length > 0) {
    if (!isConfirmPass) {
      pass = event.target.value;
    }

    let capital = false;
    let simple = false;
    let symbol = false;
    let number = false;

    cap.forEach((char) => {
      String(event.target.value)
        .split("")
        .forEach((userChar) => {
          if (char === userChar) {
            if (!capital) {
              capital = true;
            }
          }
        });
    });

    sim.forEach((char) => {
      String(event.target.value)
        .split("")
        .forEach((userChar) => {
          if (char === userChar) {
            if (!simple) {
              simple = true;
            }
          }
        });
    });

    sym.forEach((char) => {
      String(event.target.value)
        .split("")
        .forEach((userChar) => {
          if (char === userChar) {
            if (!symbol) {
              symbol = true;
            }
          }
        });
    });

    num.forEach((char) => {
      String(event.target.value)
        .split("")
        .forEach((userChar) => {
          if (char === Number(userChar)) {
            if (!number) {
              number = true;
            }
          }
        });
    });

    if (!capital) {
      error(true);
      errorMsg("you must enter capital");
    }

    if (!simple) {
      error(true);
      errorMsg("you must enter simple");
    }

    if (!symbol) {
      error(true);
      errorMsg("you must enter symble");
    }

    if (!number) {
      error(true);
      errorMsg("you must enter number");
    }
    console.log(capital, simple, number, symbol);
  }

  //   if (String(event.target.value).length >0) {
  //     errorMsg("you have some error");
  //   }
};

export const confirmPassVal = (c_event, c_error, c_errorMsg) => {
  passwordVal(c_event, c_error, c_errorMsg, true);

  console.log(pass);
};
