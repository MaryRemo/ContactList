const contact = {
    contactBuilder(contactObject){
        let contactArticle = document.createElement("article");

        let contactName = document.createElement("h3")
        contactName.textContent = contactObject.name;

        let contactNumber = document.createElement("section")
        contactNumber.textContent = contactObject.number;

        let contactAddress = document.createElement("section")
        contactAddress.textContent = contactObject.address

        contactArticle.appendChild(contactName)
        contactArticle.appendChild(contactNumber)
        contactArticle.appendChild(contactAddress)

        return contactArticle
    }
}

export default contact