// A ContactList component that displays all contacts.
// It should import the Contact component and the ContactCollection component.
import contactCollection from "./ContactCollection"
import contact from "./Contact"

const contactList = {
    contactify(){
        contactCollection.getAllContacts()
        .then(allContacts =>{
            let contactDocFragment = document.createDocumentFragment()
            allContacts.forEach(contactItem => {
                let contactHTML = contact.contactBuilder(contactItem)
                contactDocFragment.appendChild(contactHTML)
            });
            let outputArticle = document.querySelector(".output")
            outputArticle.appendChild(contactDocFragment)

        })
    }
}

export default contactList
