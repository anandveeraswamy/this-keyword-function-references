class NameField {
    constructor(name) {
        const field = document.createElement('li'); // create a <li> element
        field.textContent = name; // set the text content of the <li> element
        const nameListHook = document.querySelector('#names'); // get the <ul> element
        nameListHook.appendChild(field); // append the <li> element to the <ul> element
    }
}

class NameGenerator {
    constructor() {
        const btn = document.querySelector('button');
        btn.addEventListener('click', ???);
    }

    addName() {
        const name = new NameField("Anand");
    }
}

const gen = new NameGenerator();