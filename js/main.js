const selectLanguage = document.querySelector(".select-language");
const selectDate = document.querySelector(".select-date");
var datePicker;

function loadDatePicker() {
  datePicker = flatpickr(".select-date", {
    dateFormat: "d M, Y",
    altFormat: "m-d",
    minDate: new Date().fp_incr(7),
    defaultDate: new Date().fp_incr(7),
    disable: [
      function (date) {
        return date.getDay() === 0 || date.getDay() === 6 || (date.getDate() === 24 && date.getMonth() === 11);
      },
    ],
  });
}

function changeFormat(selected) {
  const value = selected.target.value;
  datePicker.set("locale", value);
}

selectLanguage.onchange = changeFormat;
window.addEventListener("load", loadDatePicker);
