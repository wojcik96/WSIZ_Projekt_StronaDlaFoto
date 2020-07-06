const form = document.querySelector('.contact__label');
const nameForm = document.querySelector('.contact__name');
const emailForm = document.querySelector('.contact__email');
const messageForm = document.querySelector('.contact__message');

if (form) {
   form.addEventListener('submit', function (e) {
      e.preventDefault();
      const errorArr = [];

      if (nameForm.value.trim().length <= 3) {
         errorArr.push("Twoja nazwa musi zawierać minimum 4 znaki!");
      }

      if (emailForm.value.length <= 6) {
         if (emailForm.value.indexOf("@")) {
            errorArr.push("Twój e-mail musi zawierać minimum 7 znaki i znak @ !");
         } else {
            errorArr.push("Twój e-mail musi zawierać minimum 7 znaki!");
         }
      }
      if (messageForm.value.length == 0) {
         errorArr.push("Twoja wiadomość nie może być pusta!");
      }

      if (errorArr.length) {
         alert(`Wystąpił błąd! \n${errorArr.join("\n")}`)
      } else {
         e.target.submit();
         alert(`Udało się ${nameForm.value}! Twoja wiadomość została wysłana!`)
      }
   });
}