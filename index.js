const title = document.getElementById("title")
const addButton = document.getElementById("add-button")
const contacts = document.getElementById("contacts")

//----------------------------------------------------------------

const getContacts = () => {
    if (localStorage.addressBook) {
        const contactsArray = JSON.parse(localStorage.addressBook);
        return contactsArray
    } else {
        localStorage.setItem("addressBook", "[]");
        return []
    }
}

//-----------------------------------------------------------------------

const setContacts = newContacts => {
    localStorage.addressBook = JSON.stringify(newContacts);
};

//------------------------------------------------------------------------

const addContact = newContact => {
    const contactsArray = getContacts();
    contactsArray.push(newContact);
    setContacts(contactsArray)
}

//------------------------------------------------------------------------

const submitContact = () => {
    const fullname = document.getElementById("full-name").value;

    if (fullname !== "" || fullname !== undefined) {
        // masukkan kontak baru ke local storage
        addContact({
            name: fullname
        })
        document.getElementById("full-name").value;
    } else {
        alert("Input can't be empty, brooo")
    }
}

// -------------------------------------------------------------------------

const showContacts = () => {
    contacts.innerHTML = "";
    const addressBook = getContacts();

    addressBook.map(contact => {
        const li = document.createElement("li")
        const contactNode = document.createTextNode(contact.name);
        li.appendChild(contactNode)

        contact.append(li)
    })
}

// -----------------------------------------------------------------------------

const callAddThenShow = function () {
    submitContact();
    showContacts();
};

// -----------------------------------------------------------------------------

addButton.addEventListener("click", callAddThenShow);

showContacts();