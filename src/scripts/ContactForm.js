import contactCollection from "./ContactCollection"

const contactForm = {
    createAndAppendForm() {
        let formHeader = document.createElement("h3")
        formHeader.textContent = "Add to your contacts"

        let contactNameField = document.createElement("fieldset")

        let contactNameLabel = document.createElement("label")
        contactNameLabel.textContent = "Name"
        contactNameLabel.setAttribute("for", "contact-name")
        let contactNameInput = document.createElement("input")
        contactNameInput.setAttribute("id", "contact-name")
        contactNameInput.setAttribute("name", "contact-name")

        contactNameField.appendChild(contactNameLabel)
        contactNameField.appendChild(contactNameInput)

        let contactNumberField = document.createElement("fieldset")

        let contactNumberLabel = document.createElement("label")
        contactNumberLabel.textContent = "Phone Number"
        contactNumberLabel.setAttribute("for", "contact-number")
        let contactNumberInput = document.createElement("input")
        contactNumberInput.setAttribute("id", "contact-number")
        contactNumberInput.setAttribute("name", "contact-number")

        contactNumberField.appendChild(contactNumberLabel)
        contactNumberField.appendChild(contactNumberInput)

        let contactAddressField = document.createElement("fieldset")

        let contactAddressLabel = document.createElement("label")
        contactAddressLabel.textContent = "Address"
        contactAddressLabel.setAttribute("for", "contact-address")
        let contactAddressInput = document.createElement("input")
        contactAddressInput.setAttribute("id","contact-address")
        contactAddressInput.setAttribute("name","contact-address")

        contactAddressField.appendChild(contactAddressLabel)
        contactAddressField.appendChild(contactAddressInput)


        let submitButton = document.createElement("button")
        submitButton.textContent = "Add Contact"
        submitButton.setAttribute("class", "contact-save")

        submitButton.addEventListener("click", contactForm.handleAddNewContact)

        let contactFormFragment = document.createDocumentFragment()
        contactFormFragment.appendChild(formHeader)
        contactFormFragment.appendChild(contactNameField)
        contactFormFragment.appendChild(contactNumberField)
        contactFormFragment.appendChild(contactAddressField)
        contactFormFragment.appendChild(submitButton)

        let formArticle = document.querySelector(".form")
        formArticle.appendChild(contactFormFragment)
    },
    handleAddNewContact () {
        let inputContactName = document.querySelector("#contact-name").value
        let inputContactNumber = document.querySelector("#contact-number").value
        let inputContactAddress = document.querySelector("#contact-address").value

        console.log(inputContactAddress)

        let newContact = {
            name: inputContactName,
            number: inputContactNumber,
            address: inputContactAddress
        }
        contactCollection.postAllContacts(newContact)

        }
    }


export default contactForm;