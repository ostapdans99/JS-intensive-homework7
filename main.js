const inputWidth = document.querySelector("#width");
const inputHeight = document.querySelector("#height");
const inputBgColor = document.querySelector("#bg-color");
const btnCreate = document.querySelector("#create");
const container = document.querySelector("#container");
const addContentWrap = document.querySelector("#add-content-wrap");
const addContentBtn = document.querySelector("#add-content-btn");
const mainContent = document.querySelector("#main-content");

const getWidth = () => `${inputWidth.value}px`;

const getHeight = () => `${inputHeight.value}px`;

const getBgColor = () => inputBgColor.value;

const getMainContent = () => `<p>${mainContent.value}</p>`;


const errorDiv = () => {
  const div = document.createElement("div"); 
  div.classList.add('error-div')
  div.style.width = '300px';
	div.style.height = '300px';
  div.style.backgroundColor = '#fff';
  div.innerText = 'Ошибка'
  container.appendChild(div);

}


const renderBlock = () => {
	container.innerText = "";
  const div = document.createElement("div"); 
  if(!(/^[0-9]+$/.test(inputWidth.value)) || +inputWidth.value > 1000 || +inputWidth.value < 50 ) {
    return errorDiv()
  }
  if(!(/^[0-9]+$/.test(inputHeight.value)) || +inputHeight.value > 600|| +inputHeight.value < 50 ) {
    return errorDiv()
  }
	div.classList.add("new-div");
	div.style.width = getWidth();
	div.style.height = getHeight();
	div.style.backgroundColor = getBgColor();
	div.insertAdjacentHTML("beforeend", getMainContent());
	const contentInputs = document.querySelectorAll(".add-content-input");
	contentInputs.forEach((item) => {
		div.insertAdjacentHTML("beforeend", `<p>${item.value}</p>`);
	});

	container.appendChild(div);
};

const renderInput = () => {
	const div = document.createElement("div");
	div.classList.add("container-new-content");

	const input = document.createElement("input");
	input.type = "text";
	input.placeholder = "Enter content";
  input.autocomplete = "off";
	input.classList.add("add-content-input");

	div.appendChild(input);

	const deleteBtn = document.createElement("button");
	deleteBtn.classList.add("delete-new-content");

	const icon = document.createElement("i");
	icon.classList.add("fas");
	icon.classList.add("fa-trash");
	deleteBtn.appendChild(icon);
	deleteBtn.addEventListener("click", () => div.remove());

	div.appendChild(deleteBtn);

	addContentWrap.appendChild(div);
};

btnCreate.addEventListener("click", renderBlock);

addContentBtn.addEventListener("click", renderInput);
