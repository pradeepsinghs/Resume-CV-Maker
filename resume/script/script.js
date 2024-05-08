let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
// Function to handle duplication and removal of form controls
function handleFormControls(buttonId, container, cloneTo, clone) {
  const btn = document.createElement("button");
  btn.setAttribute("class", "close");
  btn.innerHTML = `<i class="fa fa-times" aria-hidden="true"></i>`;
  clone.appendChild(btn);
  cloneTo.appendChild(clone);
  const getData = clone.querySelectorAll("input");
  getData.forEach((element) => {
    element.value = "";
  });

  btn.addEventListener("click", () => {
    cloneTo.removeChild(clone); // Remove only the specific clone
  });
}

const addmoreBtn = document.querySelectorAll(".add_");
const formControlPin = document.querySelector("#pin");
const journey = document.querySelector("#journey");
const academicbg = document.querySelector("#academicbg");
const project = document.querySelector("#project");
const skill = document.querySelector("#skill");

addmoreBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.id === "one") {
      const clone = formControlPin.cloneNode(true);
      handleFormControls("one", formControlPin, pinnacle, clone);
    } else if (e.target.id === "two") {
      const clone = journey.cloneNode(true);
      handleFormControls("two", journey, professional_jur, clone);
    } else if (e.target.id === "three") {
      const clone = academicbg.cloneNode(true);
      handleFormControls("three", academicbg, academic, clone);
    } else if (e.target.id === "four") {
      const clone = project.cloneNode(true);
      handleFormControls("four", project, projectsection, clone);
    } else {
      const clone = skill.cloneNode(true);
      handleFormControls("five", skill, skillsection, clone);
    }
  });
});

let uploadimg = document.querySelector(".uploadimg");

// print resume button
document.querySelector(".print").addEventListener("click", (e) => {
  e.preventDefault();

  //about me
  let firstname = document.querySelector(".firstname").value;
  let middlename = document.querySelector(".middlename").value;
  let lastname = document.querySelector(".lastname").value;
  let email = document.querySelector(".email").value;
  let phone = document.querySelector(".phone").value;
  let designation = document.querySelector(".designation").value;
  let website = document.querySelector(".website").value;
  let address = document.querySelector(".address").value;
  let imgGet = document.querySelector(".profleImage");
  let text_about_dec = document.querySelector(".text_about_dec").value;
  let selectImg = imgGet.files[0];

  //professional_journy
  let prof_title_value = [...document.querySelectorAll(".prof_title")].map(
    (title) => title.value
  );
  let prof_company_value = [...document.querySelectorAll(".prof_company")].map(
    (prof_company) => prof_company.value
  );
  let prof_location_value = [
    ...document.querySelectorAll(".prof_location"),
  ].map((prof_location) => prof_location.value);
  let prof_start_date_value = [
    ...document.querySelectorAll(".prof_start_date"),
  ].map((prof_start_date) => prof_start_date.value);
  let prof_last_date_value = [
    ...document.querySelectorAll(".prof_last_date"),
  ].map((prof_last_date) => prof_last_date.value);
  let prof_description = [
    ...document.querySelectorAll(".prof_description"),
  ].map((prof_description) => prof_description.value);

  //academic background
  let academic_school = [...document.querySelectorAll(".academic_school")].map(
    (academic_school) => academic_school.value
  );
  let degree = [...document.querySelectorAll(".degree")].map(
    (degree) => degree.value
  );
  let city = [...document.querySelectorAll(".city")].map((city) => city.value);
  let date_start_acedmic = [
    ...document.querySelectorAll(".date_start_acedmic"),
  ].map((date_start_acedmic) => date_start_acedmic.value);
  let date_end_acedmic = [
    ...document.querySelectorAll(".date_end_acedmic"),
  ].map((date_end_acedmic) => date_end_acedmic.value);
  let description_academic = [
    ...document.querySelectorAll(".description_academic"),
  ].map((description_academic) => description_academic.value);

  //project heightlights
  let project_name = [...document.querySelectorAll(".project_name")].map(
    (project_name) => project_name.value
  );
  let project_link = [...document.querySelectorAll(".project_link")].map(
    (project_link) => project_link.value
  );
  let project_description = [
    ...document.querySelectorAll(".project_description"),
  ].map((project_description) => project_description.value);

  //skill section
  let skill_name = [
    ...document.querySelectorAll(".skill_name"),
  ].map((skill_name) => skill_name.value);

  console.log(skill_name);

  if (selectImg) {
    let reader = new FileReader();

    reader.onload = function (e) {
      let inputValues = {
        firstname,
        middlename,
        lastname,
        email,
        phone,
        website,
        designation,
        address,
        profileImg: e.target.result,
        text_about_dec,
        prof_title_value,
        prof_company_value,
        prof_location_value,
        prof_start_date_value,
        prof_last_date_value,
        prof_description,
        academic_school,
        degree,
        city,
        date_start_acedmic,
        date_end_acedmic,
        description_academic,
        project_name,
        project_link,
        project_description,
        skill_name,
      };

      localStorage.setItem("userValue", JSON.stringify(inputValues));
      window.location.href = "displayresume.html";
    };
    reader.readAsDataURL(selectImg);
  } else {
    alert("Please select an image file.");
  }
});

// let p = `<ul class="work_pro">
// <li>${element}</li>
// <li>${storeValue.project_link[index]}</li>
// <li>${storeValue.project_description[index]}</li>
// </ul>
// <hr />`;

// document.querySelector('.Project_').innerHTML += p;
