export default class DropDown {
	constructor(dropDown, valuesList, selectedValue) {
		this.dropDown = document.querySelector(dropDown);
		this.valuesList = this.dropDown.querySelector(valuesList);
		this.selectedValue = this.dropDown.querySelector(selectedValue);
		this.init();
	}

	init() {
		this.showValueList();
		this.currentValue();

		this.selectedValue.innerText = this.valuesList.firstElementChild.innerText;
	}

	showValueList() {
		const valuesList = this.valuesList;
		this.selectedValue.addEventListener('click', function() {
			valuesList.classList.toggle('is-visible');
		});
	}

	currentValue() {
		const selectedValue = this.selectedValue;
		const valuesList = this.valuesList;
		this.valuesList.addEventListener('click', function(event) {
			if(event.target.classList.contains('selector-list__list-item')) {
				selectedValue.innerText = event.target.innerText;
				valuesList.classList.remove('is-visible');
			}
		});
	}
}