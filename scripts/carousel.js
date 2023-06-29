document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".clients-buttons button");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      buttons.forEach((b) => {
        b.classList.remove("active");
      });
      e.target.classList.add("active");
      const client = e.target.innerHTML;
      const carouselElements = document.querySelector(".carousel-inner");
      carouselElements.innerHTML = "";
      let newHTML = "";
      switch (client) {
        case "UF 386-Terralagos":
          for (let i = 1; i <= 4; i++) {
            if (i == 1) {
              newHTML += `<div class="carousel-item active">
                    <img src="./assets/img/clients/BARRIO EL CAZAL. UF10/${i}.PNG" class="d-block w-100" alt="...">
                </div>
                `;
            } else {
              newHTML += `<div class="carousel-item">
                    <img src="./assets/img/clients/BARRIO EL CAZAL. UF10/${i}.PNG" class="d-block w-100" alt="...">
                </div>
                `;
            }
          }
          break;
        case "El Cazal - UF163":
          for (let i = 1; i <= 17; i++) {
            if (i == 1) {
              newHTML += `<div class="carousel-item active">
                      <img src="./assets/img/clients/BARRIO EL CAZAL . UF163/${i}.PNG" class="d-block w-100" alt="...">
                  </div>
                  `;
            } else {
              newHTML += `<div class="carousel-item">
                      <img src="./assets/img/clients/BARRIO EL CAZAL . UF163/${i}.PNG" class="d-block w-100" alt="...">
                  </div>
                  `;
            }
          }
          break;
        case "El Cazal - UF158":
          for (let i = 1; i <= 10; i++) {
            if (i == 1) {
              newHTML += `<div class="carousel-item active">
                          <img src="./assets/img/clients/BARRIO EL CAZAL. UF158/${i}.PNG" class="d-block w-100" alt="...">
                      </div>
                      `;
            } else {
              newHTML += `<div class="carousel-item">
                          <img src="./assets/img/clients/BARRIO EL CAZAL. UF158/${i}.PNG" class="d-block w-100" alt="...">
                      </div>
                      `;
            }
          }
          break;
        case "San Sebastian - UF 3":
          for (let i = 1; i <= 14; i++) {
            if (i == 1) {
              newHTML += `<div class="carousel-item active">
                              <img src="./assets/img/clients/BARRIO SAN SEBASTIAN. AREA 13. UF 3/${i}.PNG" class="d-block w-100" alt="...">
                          </div>
                          `;
            } else {
              newHTML += `<div class="carousel-item">
                              <img src="./assets/img/clients/BARRIO SAN SEBASTIAN. AREA 13. UF 3/${i}.PNG" class="d-block w-100" alt="...">
                          </div>
                          `;
            }
          }
          break;
        case "Escobar Centro - Mermoz":
          for (let i = 1; i <= 28; i++) {
            if (i == 1) {
              newHTML += `<div class="carousel-item active">
                                  <img src="./assets/img/clients/ESCOBAR CENTRO. MERMOZ S-N/${i}.JPEG" class="d-block w-100" alt="...">
                              </div>
                              `;
            } else {
              newHTML += `<div class="carousel-item">
                                  <img src="./assets/img/clients/ESCOBAR CENTRO. MERMOZ S-N/${i}.JPEG" class="d-block w-100" alt="...">
                              </div>
                              `;
            }
          }
          break;
        case "El Cazador - OBLIGADO 350":
          for (let i = 1; i <= 34; i++) {
            if (i == 1) {
              newHTML += `<div class="carousel-item active">
                                      <img src="./assets/img/clients/BARRIO EL CAZADOR. OBLIGADO 350/${i}.JPEG" class="d-block w-100" alt="...">
                                  </div>
                                  `;
            } else {
              newHTML += `<div class="carousel-item">
                                      <img src="./assets/img/clients/BARRIO EL CAZADOR. OBLIGADO 350/${i}.JPEG" class="d-block w-100" alt="...">
                                  </div>
                                  `;
            }
          }
          break;
        case "El Cazador - OBLIGADO 450":
          for (let i = 1; i <= 18; i++) {
            if (i == 1) {
              newHTML += `<div class="carousel-item active">
                                          <img src="./assets/img/clients/BARRIO EL CAZADOR. OBLOGADO 450/${i}.JPEG" class="d-block w-100" alt="...">
                                      </div>
                                      `;
            } else {
              newHTML += `<div class="carousel-item">
                                          <img src="./assets/img/clients/BARRIO EL CAZADOR. OBLOGADO 450/${i}.JPEG" class="d-block w-100" alt="...">
                                      </div>
                                      `;
            }
          }
          break;
      }
      carouselElements.innerHTML = newHTML;
    });
  });
});