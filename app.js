const button = document.querySelector("#calc");
const display = document.querySelector("#display");

button.addEventListener("click", function () {
  let day = Number(document.getElementById("dd").value);
  let month = Number(document.getElementById("mm").value);
  let year = Number(document.getElementById("yy").value);

  if (day && month && year) {
    let date = new Date();
    let passDay = date.getDate();
    let passMonth = date.getMonth() + 1;
    let fullYear = date.getFullYear();

    let monthArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (passDay < day) {
      passsDay += monthArr[passMonth - 1];
      passMonth -= 1;
    }
    if (passMonth < month) {
      passMonth += 12;
      fullYear -= 1;
    }

    display.innerHTML = `You had passed ${fullYear - year}Years  ${
      passMonth - month
    }Months and ${passDay - day}Days`;
  } else {
    alert("Please Fill Out All Data");
  }
});
