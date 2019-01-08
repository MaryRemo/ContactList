(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const contact = {
  contactBuilder(contactObject) {
    let contactArticle = document.createElement("article");
    let contactName = document.createElement("h3");
    contactName.textContent = contactObject.name;
    let contactNumber = document.createElement("section");
    contactNumber.textContent = contactObject.number;
    let contactAddress = document.createElement("section");
    contactAddress.textContent = contactObject.address;
    contactArticle.appendChild(contactName);
    contactArticle.appendChild(contactNumber);
    contactArticle.appendChild(contactAddress);
    return contactArticle;
  }

};
var _default = contact;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// A ContactCollection component that loads existing contacts from
// storage, and saves new ones. Each new contact should have an auto-generated
//  identifier.
const contactCollection = {
  getAllContacts() {
    return fetch("http://localhost:8088/contacts").then(response => response.json());
  },

  postAllContacts(newContactToSave) {
    return fetch("http://localhost:8088/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newContactToSave)
    }); // location.reload(true);
  }

};
var _default = contactCollection;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ContactCollection = _interopRequireDefault(require("./ContactCollection"));

var _ContactList = _interopRequireDefault(require("./ContactList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const contactForm = {
  createAndAppendForm() {
    let formHeader = document.createElement("h3");
    formHeader.textContent = "Add to your contacts";
    let contactNameField = document.createElement("fieldset");
    let contactNameLabel = document.createElement("label");
    contactNameLabel.textContent = "Name";
    contactNameLabel.setAttribute("for", "contact-name");
    let contactNameInput = document.createElement("input");
    contactNameInput.setAttribute("id", "contact-name");
    contactNameInput.setAttribute("name", "contact-name");
    contactNameField.appendChild(contactNameLabel);
    contactNameField.appendChild(contactNameInput);
    let contactNumberField = document.createElement("fieldset");
    let contactNumberLabel = document.createElement("label");
    contactNumberLabel.textContent = "Phone Number";
    contactNumberLabel.setAttribute("for", "contact-number");
    let contactNumberInput = document.createElement("input");
    contactNumberInput.setAttribute("id", "contact-number");
    contactNumberInput.setAttribute("name", "contact-number");
    contactNumberField.appendChild(contactNumberLabel);
    contactNumberField.appendChild(contactNumberInput);
    let contactAddressField = document.createElement("fieldset");
    let contactAddressLabel = document.createElement("label");
    contactAddressLabel.textContent = "Address";
    contactAddressLabel.setAttribute("for", "contact-address");
    let contactAddressInput = document.createElement("input");
    contactAddressInput.setAttribute("id", "contact-address");
    contactAddressInput.setAttribute("name", "contact-address");
    contactAddressField.appendChild(contactAddressLabel);
    contactAddressField.appendChild(contactAddressInput);
    let submitButton = document.createElement("button");
    submitButton.textContent = "Add Contact";
    submitButton.setAttribute("class", "contact-save");
    submitButton.addEventListener("click", this.handleAddNewContact);
    let contactFormFragment = document.createDocumentFragment();
    contactFormFragment.appendChild(formHeader);
    contactFormFragment.appendChild(contactNameField);
    contactFormFragment.appendChild(contactNumberField);
    contactFormFragment.appendChild(contactAddressField);
    contactFormFragment.appendChild(submitButton);
    let formArticle = document.querySelector(".form");
    formArticle.appendChild(contactFormFragment);
  },

  handleAddNewContact() {
    let inputContactName = document.querySelector("#contact-name").value;
    let inputContactNumber = document.querySelector("#contact-number").value;
    let inputContactAddress = document.querySelector("#contact-address").value;
    console.log(inputContactAddress);
    let newContact = {
      name: inputContactName,
      number: inputContactNumber,
      address: inputContactAddress
    };

    _ContactCollection.default.postAllContacts(newContact).then(response => {
      _ContactList.default.contactify();

      console.log(response);
    });
  }

};
var _default = contactForm;
exports.default = _default;

},{"./ContactCollection":2,"./ContactList":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ContactCollection = _interopRequireDefault(require("./ContactCollection"));

var _Contact = _interopRequireDefault(require("./Contact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// A ContactList component that displays all contacts.
// It should import the Contact component and the ContactCollection component.
const contactList = {
  contactify() {
    _ContactCollection.default.getAllContacts().then(allContacts => {
      let contactDocFragment = document.createDocumentFragment();
      allContacts.forEach(contactItem => {
        let contactHTML = _Contact.default.contactBuilder(contactItem);

        contactDocFragment.appendChild(contactHTML);
      });
      let outputArticle = document.querySelector(".output");
      outputArticle.appendChild(contactDocFragment);
    });
  }

};
var _default = contactList;
exports.default = _default;

},{"./Contact":1,"./ContactCollection":2}],5:[function(require,module,exports){
"use strict";

var _ContactList = _interopRequireDefault(require("./ContactList"));

var _ContactForm = _interopRequireDefault(require("./ContactForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_ContactList.default.contactify();

_ContactForm.default.createAndAppendForm();

},{"./ContactForm":3,"./ContactList":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL0NvbnRhY3QuanMiLCIuLi9zY3JpcHRzL0NvbnRhY3RDb2xsZWN0aW9uLmpzIiwiLi4vc2NyaXB0cy9Db250YWN0Rm9ybS5qcyIsIi4uL3NjcmlwdHMvQ29udGFjdExpc3QuanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQSxNQUFNLE9BQU8sR0FBRztBQUNaLEVBQUEsY0FBYyxDQUFDLGFBQUQsRUFBZTtBQUN6QixRQUFJLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFyQjtBQUVBLFFBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQWxCO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixHQUEwQixhQUFhLENBQUMsSUFBeEM7QUFFQSxRQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFwQjtBQUNBLElBQUEsYUFBYSxDQUFDLFdBQWQsR0FBNEIsYUFBYSxDQUFDLE1BQTFDO0FBRUEsUUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBckI7QUFDQSxJQUFBLGNBQWMsQ0FBQyxXQUFmLEdBQTZCLGFBQWEsQ0FBQyxPQUEzQztBQUVBLElBQUEsY0FBYyxDQUFDLFdBQWYsQ0FBMkIsV0FBM0I7QUFDQSxJQUFBLGNBQWMsQ0FBQyxXQUFmLENBQTJCLGFBQTNCO0FBQ0EsSUFBQSxjQUFjLENBQUMsV0FBZixDQUEyQixjQUEzQjtBQUVBLFdBQU8sY0FBUDtBQUNIOztBQWxCVyxDQUFoQjtlQXFCZSxPOzs7Ozs7Ozs7O0FDckJmO0FBQ0E7QUFDQTtBQUVBLE1BQU0saUJBQWlCLEdBQUc7QUFFdEIsRUFBQSxjQUFjLEdBQUc7QUFDYixXQUFPLEtBQUssQ0FBQyxnQ0FBRCxDQUFMLENBQ04sSUFETSxD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Q0FBa0MsVUFBbEMsRUFDQyxJQURELENBQ00sUUFBUSxJQUFJO0FBQ2YsMkJBQVksVUFBWjs7QUFDQSxNQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksUUFBWjtBQUNFLEtBSkw7QUFLQzs7QUEzRWUsQ0FBcEI7ZUErRWUsVzs7Ozs7Ozs7Ozs7QUNoRmY7O0FBQ0E7Ozs7QUFIQTtBQUNBO0FBSUEsTUFBTSxXQUFXLEdBQUc7QUFDaEIsRUFBQSxVQUFVLEdBQUU7QUFDUiwrQkFBa0IsY0FBbEIsR0FDQyxJQURELENBQ00sV0FBVyxJQUFHO0FBQ2hCLFVBQUksa0JBQWtCLEdBQUcsUUFBUSxDQUFDLHNCQUFULEVBQXpCO0FBQ0EsTUFBQSxXQUFXLENBQUMsT0FBWixDQUFvQixXQUFXLElBQUk7QUFDL0IsWUFBSSxXQUFXLEdBQUcsaUJBQVEsY0FBUixDQUF1QixXQUF2QixDQUFsQjs7QUFDQSxRQUFBLGtCQUFrQixDQUFDLFdBQW5CLENBQStCLFdBQS9CO0FBQ0gsT0FIRDtBQUlBLFVBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQXBCO0FBQ0EsTUFBQSxhQUFhLENBQUMsV0FBZCxDQUEwQixrQkFBMUI7QUFFSCxLQVZEO0FBV0g7O0FBYmUsQ0FBcEI7ZUFnQmUsVzs7Ozs7O0FDckJmOztBQUNBOzs7O0FBRUEscUJBQVksVUFBWjs7QUFDQSxxQkFBWSxtQkFBWiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGNvbnRhY3QgPSB7XG4gICAgY29udGFjdEJ1aWxkZXIoY29udGFjdE9iamVjdCl7XG4gICAgICAgIGxldCBjb250YWN0QXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuXG4gICAgICAgIGxldCBjb250YWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgICAgICBjb250YWN0TmFtZS50ZXh0Q29udGVudCA9IGNvbnRhY3RPYmplY3QubmFtZTtcblxuICAgICAgICBsZXQgY29udGFjdE51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpXG4gICAgICAgIGNvbnRhY3ROdW1iZXIudGV4dENvbnRlbnQgPSBjb250YWN0T2JqZWN0Lm51bWJlcjtcblxuICAgICAgICBsZXQgY29udGFjdEFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKVxuICAgICAgICBjb250YWN0QWRkcmVzcy50ZXh0Q29udGVudCA9IGNvbnRhY3RPYmplY3QuYWRkcmVzc1xuXG4gICAgICAgIGNvbnRhY3RBcnRpY2xlLmFwcGVuZENoaWxkKGNvbnRhY3ROYW1lKVxuICAgICAgICBjb250YWN0QXJ0aWNsZS5hcHBlbmRDaGlsZChjb250YWN0TnVtYmVyKVxuICAgICAgICBjb250YWN0QXJ0aWNsZS5hcHBlbmRDaGlsZChjb250YWN0QWRkcmVzcylcblxuICAgICAgICByZXR1cm4gY29udGFjdEFydGljbGVcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3QiLCIvLyBBIENvbnRhY3RDb2xsZWN0aW9uIGNvbXBvbmVudCB0aGF0IGxvYWRzIGV4aXN0aW5nIGNvbnRhY3RzIGZyb21cbi8vIHN0b3JhZ2UsIGFuZCBzYXZlcyBuZXcgb25lcy4gRWFjaCBuZXcgY29udGFjdCBzaG91bGQgaGF2ZSBhbiBhdXRvLWdlbmVyYXRlZFxuLy8gIGlkZW50aWZpZXIuXG5cbmNvbnN0IGNvbnRhY3RDb2xsZWN0aW9uID0ge1xuXG4gICAgZ2V0QWxsQ29udGFjdHMgKCl7XG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9jb250YWN0c1wiKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgfSxcbiAgICBwb3N0QWxsQ29udGFjdHMobmV3Q29udGFjdFRvU2F2ZSl7XG4gICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2NvbnRhY3RzXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdDb250YWN0VG9TYXZlKVxuICAgIH0pXG4gICAgXG4gICAgLy8gbG9jYXRpb24ucmVsb2FkKHRydWUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RDb2xsZWN0aW9uIiwiaW1wb3J0IGNvbnRhY3RDb2xsZWN0aW9uIGZyb20gXCIuL0NvbnRhY3RDb2xsZWN0aW9uXCJcbmltcG9ydCBjb250YWN0TGlzdCBmcm9tIFwiLi9Db250YWN0TGlzdFwiO1xuXG5jb25zdCBjb250YWN0Rm9ybSA9IHtcbiAgICBjcmVhdGVBbmRBcHBlbmRGb3JtKCkge1xuICAgICAgICBsZXQgZm9ybUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgICAgICBmb3JtSGVhZGVyLnRleHRDb250ZW50ID0gXCJBZGQgdG8geW91ciBjb250YWN0c1wiXG5cbiAgICAgICAgbGV0IGNvbnRhY3ROYW1lRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIilcblxuICAgICAgICBsZXQgY29udGFjdE5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgICAgICBjb250YWN0TmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lXCJcbiAgICAgICAgY29udGFjdE5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjb250YWN0LW5hbWVcIilcbiAgICAgICAgbGV0IGNvbnRhY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICAgICAgY29udGFjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3QtbmFtZVwiKVxuICAgICAgICBjb250YWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjb250YWN0LW5hbWVcIilcblxuICAgICAgICBjb250YWN0TmFtZUZpZWxkLmFwcGVuZENoaWxkKGNvbnRhY3ROYW1lTGFiZWwpXG4gICAgICAgIGNvbnRhY3ROYW1lRmllbGQuYXBwZW5kQ2hpbGQoY29udGFjdE5hbWVJbnB1dClcblxuICAgICAgICBsZXQgY29udGFjdE51bWJlckZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpXG5cbiAgICAgICAgbGV0IGNvbnRhY3ROdW1iZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgICAgICBjb250YWN0TnVtYmVyTGFiZWwudGV4dENvbnRlbnQgPSBcIlBob25lIE51bWJlclwiXG4gICAgICAgIGNvbnRhY3ROdW1iZXJMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjb250YWN0LW51bWJlclwiKVxuICAgICAgICBsZXQgY29udGFjdE51bWJlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgICAgIGNvbnRhY3ROdW1iZXJJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3QtbnVtYmVyXCIpXG4gICAgICAgIGNvbnRhY3ROdW1iZXJJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiY29udGFjdC1udW1iZXJcIilcblxuICAgICAgICBjb250YWN0TnVtYmVyRmllbGQuYXBwZW5kQ2hpbGQoY29udGFjdE51bWJlckxhYmVsKVxuICAgICAgICBjb250YWN0TnVtYmVyRmllbGQuYXBwZW5kQ2hpbGQoY29udGFjdE51bWJlcklucHV0KVxuXG4gICAgICAgIGxldCBjb250YWN0QWRkcmVzc0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpXG5cbiAgICAgICAgbGV0IGNvbnRhY3RBZGRyZXNzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgICAgICAgY29udGFjdEFkZHJlc3NMYWJlbC50ZXh0Q29udGVudCA9IFwiQWRkcmVzc1wiXG4gICAgICAgIGNvbnRhY3RBZGRyZXNzTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiY29udGFjdC1hZGRyZXNzXCIpXG4gICAgICAgIGxldCBjb250YWN0QWRkcmVzc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgICAgIGNvbnRhY3RBZGRyZXNzSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIixcImNvbnRhY3QtYWRkcmVzc1wiKVxuICAgICAgICBjb250YWN0QWRkcmVzc0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIixcImNvbnRhY3QtYWRkcmVzc1wiKVxuXG4gICAgICAgIGNvbnRhY3RBZGRyZXNzRmllbGQuYXBwZW5kQ2hpbGQoY29udGFjdEFkZHJlc3NMYWJlbClcbiAgICAgICAgY29udGFjdEFkZHJlc3NGaWVsZC5hcHBlbmRDaGlsZChjb250YWN0QWRkcmVzc0lucHV0KVxuXG5cbiAgICAgICAgbGV0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgQ29udGFjdFwiXG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbnRhY3Qtc2F2ZVwiKVxuXG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVBZGROZXdDb250YWN0KVxuXG4gICAgICAgIGxldCBjb250YWN0Rm9ybUZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG4gICAgICAgIGNvbnRhY3RGb3JtRnJhZ21lbnQuYXBwZW5kQ2hpbGQoZm9ybUhlYWRlcilcbiAgICAgICAgY29udGFjdEZvcm1GcmFnbWVudC5hcHBlbmRDaGlsZChjb250YWN0TmFtZUZpZWxkKVxuICAgICAgICBjb250YWN0Rm9ybUZyYWdtZW50LmFwcGVuZENoaWxkKGNvbnRhY3ROdW1iZXJGaWVsZClcbiAgICAgICAgY29udGFjdEZvcm1GcmFnbWVudC5hcHBlbmRDaGlsZChjb250YWN0QWRkcmVzc0ZpZWxkKVxuICAgICAgICBjb250YWN0Rm9ybUZyYWdtZW50LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbilcblxuICAgICAgICBsZXQgZm9ybUFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIilcbiAgICAgICAgZm9ybUFydGljbGUuYXBwZW5kQ2hpbGQoY29udGFjdEZvcm1GcmFnbWVudClcbiAgICB9LFxuICAgIGhhbmRsZUFkZE5ld0NvbnRhY3QgKCkge1xuICAgICAgICBsZXQgaW5wdXRDb250YWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC1uYW1lXCIpLnZhbHVlXG4gICAgICAgIGxldCBpbnB1dENvbnRhY3ROdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtbnVtYmVyXCIpLnZhbHVlXG4gICAgICAgIGxldCBpbnB1dENvbnRhY3RBZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LWFkZHJlc3NcIikudmFsdWVcblxuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dENvbnRhY3RBZGRyZXNzKVxuXG4gICAgICAgIGxldCBuZXdDb250YWN0ID0ge1xuICAgICAgICAgICAgbmFtZTogaW5wdXRDb250YWN0TmFtZSxcbiAgICAgICAgICAgIG51bWJlcjogaW5wdXRDb250YWN0TnVtYmVyLFxuICAgICAgICAgICAgYWRkcmVzczogaW5wdXRDb250YWN0QWRkcmVzc1xuICAgICAgICB9XG4gICAgY29udGFjdENvbGxlY3Rpb24ucG9zdEFsbENvbnRhY3RzKG5ld0NvbnRhY3QpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgIGNvbnRhY3RMaXN0LmNvbnRhY3RpZnkoKVxuICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0Rm9ybTsiLCIvLyBBIENvbnRhY3RMaXN0IGNvbXBvbmVudCB0aGF0IGRpc3BsYXlzIGFsbCBjb250YWN0cy5cbi8vIEl0IHNob3VsZCBpbXBvcnQgdGhlIENvbnRhY3QgY29tcG9uZW50IGFuZCB0aGUgQ29udGFjdENvbGxlY3Rpb24gY29tcG9uZW50LlxuaW1wb3J0IGNvbnRhY3RDb2xsZWN0aW9uIGZyb20gXCIuL0NvbnRhY3RDb2xsZWN0aW9uXCJcbmltcG9ydCBjb250YWN0IGZyb20gXCIuL0NvbnRhY3RcIlxuXG5jb25zdCBjb250YWN0TGlzdCA9IHtcbiAgICBjb250YWN0aWZ5KCl7XG4gICAgICAgIGNvbnRhY3RDb2xsZWN0aW9uLmdldEFsbENvbnRhY3RzKClcbiAgICAgICAgLnRoZW4oYWxsQ29udGFjdHMgPT57XG4gICAgICAgICAgICBsZXQgY29udGFjdERvY0ZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG4gICAgICAgICAgICBhbGxDb250YWN0cy5mb3JFYWNoKGNvbnRhY3RJdGVtID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY29udGFjdEhUTUwgPSBjb250YWN0LmNvbnRhY3RCdWlsZGVyKGNvbnRhY3RJdGVtKVxuICAgICAgICAgICAgICAgIGNvbnRhY3REb2NGcmFnbWVudC5hcHBlbmRDaGlsZChjb250YWN0SFRNTClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV0IG91dHB1dEFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKVxuICAgICAgICAgICAgb3V0cHV0QXJ0aWNsZS5hcHBlbmRDaGlsZChjb250YWN0RG9jRnJhZ21lbnQpXG5cbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RMaXN0XG4iLCJpbXBvcnQgY29udGFjdExpc3QgZnJvbSBcIi4vQ29udGFjdExpc3RcIlxuaW1wb3J0IGNvbnRhY3RGb3JtIGZyb20gXCIuL0NvbnRhY3RGb3JtXCJcblxuY29udGFjdExpc3QuY29udGFjdGlmeSgpXG5jb250YWN0Rm9ybS5jcmVhdGVBbmRBcHBlbmRGb3JtKClcblxuXG5cbiJdfQ==
