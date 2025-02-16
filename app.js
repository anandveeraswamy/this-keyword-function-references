class NameField {
    constructor(name) {
        const field = document.createElement('li');
        field.textContent = name;
        document.querySelector('#names').appendChild(field);
    }
}

class NameGenerator {
    constructor() {
        this.names = ['Anand', 'Anand', 'Josh', 'Jeff'];
        this.currentName = 0;
        this.lastAddedName = null;  // Keep track of last added name
        this.messageElement = document.querySelector("#message");

        // ✅ Add Name button - Implemented (Uses bind)
        document.querySelector("#btn-add").addEventListener('click', this.addName.bind(this));

        // ❌ TODO: Implement Remove Last Name button using the bind function
        // document.querySelector("#btn-remove").addEventListener('click', this.removeLastName.bind(this) );
        document.querySelector("#btn-remove").addEventListener('click', () => {
            this.removeLastName();
        });

        // ❌ TODO: Implement Shuffle Names button using an arrow function
        // document.querySelector("#btn-shuffle").addEventListener('click', /* Students complete this */ );
        document.querySelector("#btn-shuffle").addEventListener('click', () => {
            this.shuffleNames();
        });
    }

    addName() {
        console.log(this.lastAddedName);
        if (this.names[this.currentName] === this.lastAddedName) {
            this.messageElement.textContent = "Skipping duplicate name!";
            this.messageElement.style.color = "orange";
            this.currentName = (this.currentName + 1) % this.names.length; // Skip to the next name
            return;
        }

        new NameField(this.names[this.currentName]);
        this.lastAddedName = this.names[this.currentName]; // Store last added name
        this.currentName = (this.currentName + 1) % this.names.length;

        this.messageElement.textContent = "Name added!";
        this.messageElement.style.color = "green";
    }

    // ❌ TODO: Implement this method to remove the last added name
    removeLastName() {
        /* Students complete this */
        this.names.pop();
        this.listParent = document.querySelector("#names");
        if (this.listParent.lastElementChild) {
            this.listParent.removeChild(this.listParent.lastElementChild);
        }

    }

    // ❌ TODO: Implement this method to shuffle names and reset the index
    shuffleNames() {
        /* Students complete this */
        this.names.sort(
            () => Math.random() - 0.5 // shuffle the names array
        );
        this.currentName = 0;
        this.messageElement.textContent = "Names shuffled!";
        this.messageElement.style.color = "purple";
    }
}

// Instantiate the class
const gen = new NameGenerator();
