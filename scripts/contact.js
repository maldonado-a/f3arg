window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const spinner = document.querySelector(".spinner");
      spinner.classList.remove("disp-none");
      spinner.classList.add("disp-flex");
      let name = document.querySelector("#name").value;
      let email = document.querySelector("#email").value;
      let message = document.querySelector("#message").value;
      const errorElement = document.querySelector(".error");
      const successElement = document.querySelector(".success");
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "../forms/contact.php");
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.send(`name=${name}&email=${email}&message=${message}`);
      xhr.onload = function () {
        if (this.status == 200) {
          spinner.classList.add("disp-none");
          spinner.classList.remove("disp-flex");
          successElement.classList.remove("disp-none");
          successElement.classList.add("disp-flex");
          form.reset();
        } else {
          spinner.classList.add("disp-none");
          successElement.classList.remove("disp-none");
          errorElement.classList.add("disp-flex");
          form.reset();
        }
      };
    });
  });
  