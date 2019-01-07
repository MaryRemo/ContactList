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
    fetch("http://localhost:8088/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newContactToSave)
    });
    location.reload(true);
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
    submitButton.addEventListener("click", contactForm.handleAddNewContact);
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

    _ContactCollection.default.postAllContacts(newContact);
  }

};
var _default = contactForm;
exports.default = _default;

},{"./ContactCollection":2}],4:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL0NvbnRhY3QuanMiLCIuLi9zY3JpcHRzL0NvbnRhY3RDb2xsZWN0aW9uLmpzIiwiLi4vc2NyaXB0cy9Db250YWN0Rm9ybS5qcyIsIi4uL3NjcmlwdHMvQ29udGFjdExpc3QuanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQSxNQUFNLE9BQU8sR0FBRztBQUNaLEVBQUEsY0FBYyxDQUFDLGFBQUQsRUFBZTtBQUN6QixRQUFJLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFyQjtBQUVBLFFBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQWxCO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixHQUEwQixhQUFhLENBQUMsSUFBeEM7QUFFQSxRQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFwQjtBQUNBLElBQUEsYUFBYSxDQUFDLFdBQWQsR0FBNEIsYUFBYSxDQUFDLE1BQTFDO0FBRUEsUUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBckI7QUFDQSxJQUFBLGNBQWMsQ0FBQyxXQUFmLEdBQTZCLGFBQWEsQ0FBQyxPQUEzQztBQUVBLElBQUEsY0FBYyxDQUFDLFdBQWYsQ0FBMkIsV0FBM0I7QUFDQSxJQUFBLGNBQWMsQ0FBQyxXQUFmLENBQTJCLGFBQTNCO0FBQ0EsSUFBQSxjQUFjLENBQUMsV0FBZixDQUEyQixjQUEzQjtBQUVBLFdBQU8sY0FBUDtBQUNIOztBQWxCVyxDQUFoQjtlQXFCZSxPOzs7Ozs7Ozs7O0FDckJmO0FBQ0E7QUFDQTtBQUVBLE1BQU0saUJBQWlCLEdBQUc7QUFFdEIsRUFBQSxjQUFjLEdBQUc7QUFDYixXQUFPLEtBQUssQ0FBQyxnQ0FBRCxDQUFMLENBQ04sSUFETSxD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QWpCOztBQUtBLCtCQUFrQixlQUFsQixDQUFrQyxVQUFsQztBQUVDOztBQXhFVyxDQUFwQjtlQTRFZSxXOzs7Ozs7Ozs7OztBQzVFZjs7QUFDQTs7OztBQUhBO0FBQ0E7QUFJQSxNQUFNLFdBQVcsR0FBRztBQUNoQixFQUFBLFVBQVUsR0FBRTtBQUNSLCtCQUFrQixjQUFsQixHQUNDLElBREQsQ0FDTSxXQUFXLElBQUc7QUFDaEIsVUFBSSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsc0JBQVQsRUFBekI7QUFDQSxNQUFBLFdBQVcsQ0FBQyxPQUFaLENBQW9CLFdBQVcsSUFBSTtBQUMvQixZQUFJLFdBQVcsR0FBRyxpQkFBUSxjQUFSLENBQXVCLFdBQXZCLENBQWxCOztBQUNBLFFBQUEsa0JBQWtCLENBQUMsV0FBbkIsQ0FBK0IsV0FBL0I7QUFDSCxPQUhEO0FBSUEsVUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBcEI7QUFDQSxNQUFBLGFBQWEsQ0FBQyxXQUFkLENBQTBCLGtCQUExQjtBQUVILEtBVkQ7QUFXSDs7QUFiZSxDQUFwQjtlQWdCZSxXOzs7Ozs7QUNyQmY7O0FBQ0E7Ozs7QUFFQSxxQkFBWSxVQUFaOztBQUNBLHFCQUFZLG1CQUFaIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgY29udGFjdCA9IHtcbiAgICBjb250YWN0QnVpbGRlcihjb250YWN0T2JqZWN0KXtcbiAgICAgICAgbGV0IGNvbnRhY3RBcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG5cbiAgICAgICAgbGV0IGNvbnRhY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgICAgIGNvbnRhY3ROYW1lLnRleHRDb250ZW50ID0gY29udGFjdE9iamVjdC5uYW1lO1xuXG4gICAgICAgIGxldCBjb250YWN0TnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIilcbiAgICAgICAgY29udGFjdE51bWJlci50ZXh0Q29udGVudCA9IGNvbnRhY3RPYmplY3QubnVtYmVyO1xuXG4gICAgICAgIGxldCBjb250YWN0QWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpXG4gICAgICAgIGNvbnRhY3RBZGRyZXNzLnRleHRDb250ZW50ID0gY29udGFjdE9iamVjdC5hZGRyZXNzXG5cbiAgICAgICAgY29udGFjdEFydGljbGUuYXBwZW5kQ2hpbGQoY29udGFjdE5hbWUpXG4gICAgICAgIGNvbnRhY3RBcnRpY2xlLmFwcGVuZENoaWxkKGNvbnRhY3ROdW1iZXIpXG4gICAgICAgIGNvbnRhY3RBcnRpY2xlLmFwcGVuZENoaWxkKGNvbnRhY3RBZGRyZXNzKVxuXG4gICAgICAgIHJldHVybiBjb250YWN0QXJ0aWNsZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdCIsIi8vIEEgQ29udGFjdENvbGxlY3Rpb24gY29tcG9uZW50IHRoYXQgbG9hZHMgZXhpc3RpbmcgY29udGFjdHMgZnJvbVxuLy8gc3RvcmFnZSwgYW5kIHNhdmVzIG5ldyBvbmVzLiBFYWNoIG5ldyBjb250YWN0IHNob3VsZCBoYXZlIGFuIGF1dG8tZ2VuZXJhdGVkXG4vLyAgaWRlbnRpZmllci5cblxuY29uc3QgY29udGFjdENvbGxlY3Rpb24gPSB7XG5cbiAgICBnZXRBbGxDb250YWN0cyAoKXtcbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2NvbnRhY3RzXCIpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICB9LFxuICAgIHBvc3RBbGxDb250YWN0cyhuZXdDb250YWN0VG9TYXZlKXtcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvY29udGFjdHNcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0NvbnRhY3RUb1NhdmUpXG4gICAgfSlcbiAgICBsb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdENvbGxlY3Rpb24iLCJpbXBvcnQgY29udGFjdENvbGxlY3Rpb24gZnJvbSBcIi4vQ29udGFjdENvbGxlY3Rpb25cIlxuXG5jb25zdCBjb250YWN0Rm9ybSA9IHtcbiAgICBjcmVhdGVBbmRBcHBlbmRGb3JtKCkge1xuICAgICAgICBsZXQgZm9ybUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgICAgICBmb3JtSGVhZGVyLnRleHRDb250ZW50ID0gXCJBZGQgdG8geW91ciBjb250YWN0c1wiXG5cbiAgICAgICAgbGV0IGNvbnRhY3ROYW1lRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIilcblxuICAgICAgICBsZXQgY29udGFjdE5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgICAgICBjb250YWN0TmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lXCJcbiAgICAgICAgY29udGFjdE5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjb250YWN0LW5hbWVcIilcbiAgICAgICAgbGV0IGNvbnRhY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICAgICAgY29udGFjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3QtbmFtZVwiKVxuICAgICAgICBjb250YWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjb250YWN0LW5hbWVcIilcblxuICAgICAgICBjb250YWN0TmFtZUZpZWxkLmFwcGVuZENoaWxkKGNvbnRhY3ROYW1lTGFiZWwpXG4gICAgICAgIGNvbnRhY3ROYW1lRmllbGQuYXBwZW5kQ2hpbGQoY29udGFjdE5hbWVJbnB1dClcblxuICAgICAgICBsZXQgY29udGFjdE51bWJlckZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpXG5cbiAgICAgICAgbGV0IGNvbnRhY3ROdW1iZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgICAgICBjb250YWN0TnVtYmVyTGFiZWwudGV4dENvbnRlbnQgPSBcIlBob25lIE51bWJlclwiXG4gICAgICAgIGNvbnRhY3ROdW1iZXJMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjb250YWN0LW51bWJlclwiKVxuICAgICAgICBsZXQgY29udGFjdE51bWJlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgICAgIGNvbnRhY3ROdW1iZXJJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3QtbnVtYmVyXCIpXG4gICAgICAgIGNvbnRhY3ROdW1iZXJJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiY29udGFjdC1udW1iZXJcIilcblxuICAgICAgICBjb250YWN0TnVtYmVyRmllbGQuYXBwZW5kQ2hpbGQoY29udGFjdE51bWJlckxhYmVsKVxuICAgICAgICBjb250YWN0TnVtYmVyRmllbGQuYXBwZW5kQ2hpbGQoY29udGFjdE51bWJlcklucHV0KVxuXG4gICAgICAgIGxldCBjb250YWN0QWRkcmVzc0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpXG5cbiAgICAgICAgbGV0IGNvbnRhY3RBZGRyZXNzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgICAgICAgY29udGFjdEFkZHJlc3NMYWJlbC50ZXh0Q29udGVudCA9IFwiQWRkcmVzc1wiXG4gICAgICAgIGNvbnRhY3RBZGRyZXNzTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiY29udGFjdC1hZGRyZXNzXCIpXG4gICAgICAgIGxldCBjb250YWN0QWRkcmVzc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgICAgIGNvbnRhY3RBZGRyZXNzSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIixcImNvbnRhY3QtYWRkcmVzc1wiKVxuICAgICAgICBjb250YWN0QWRkcmVzc0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIixcImNvbnRhY3QtYWRkcmVzc1wiKVxuXG4gICAgICAgIGNvbnRhY3RBZGRyZXNzRmllbGQuYXBwZW5kQ2hpbGQoY29udGFjdEFkZHJlc3NMYWJlbClcbiAgICAgICAgY29udGFjdEFkZHJlc3NGaWVsZC5hcHBlbmRDaGlsZChjb250YWN0QWRkcmVzc0lucHV0KVxuXG5cbiAgICAgICAgbGV0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgQ29udGFjdFwiXG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbnRhY3Qtc2F2ZVwiKVxuXG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29udGFjdEZvcm0uaGFuZGxlQWRkTmV3Q29udGFjdClcblxuICAgICAgICBsZXQgY29udGFjdEZvcm1GcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICAgICAgICBjb250YWN0Rm9ybUZyYWdtZW50LmFwcGVuZENoaWxkKGZvcm1IZWFkZXIpXG4gICAgICAgIGNvbnRhY3RGb3JtRnJhZ21lbnQuYXBwZW5kQ2hpbGQoY29udGFjdE5hbWVGaWVsZClcbiAgICAgICAgY29udGFjdEZvcm1GcmFnbWVudC5hcHBlbmRDaGlsZChjb250YWN0TnVtYmVyRmllbGQpXG4gICAgICAgIGNvbnRhY3RGb3JtRnJhZ21lbnQuYXBwZW5kQ2hpbGQoY29udGFjdEFkZHJlc3NGaWVsZClcbiAgICAgICAgY29udGFjdEZvcm1GcmFnbWVudC5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pXG5cbiAgICAgICAgbGV0IGZvcm1BcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpXG4gICAgICAgIGZvcm1BcnRpY2xlLmFwcGVuZENoaWxkKGNvbnRhY3RGb3JtRnJhZ21lbnQpXG4gICAgfSxcbiAgICBoYW5kbGVBZGROZXdDb250YWN0ICgpIHtcbiAgICAgICAgbGV0IGlucHV0Q29udGFjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtbmFtZVwiKS52YWx1ZVxuICAgICAgICBsZXQgaW5wdXRDb250YWN0TnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LW51bWJlclwiKS52YWx1ZVxuICAgICAgICBsZXQgaW5wdXRDb250YWN0QWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC1hZGRyZXNzXCIpLnZhbHVlXG5cbiAgICAgICAgY29uc29sZS5sb2coaW5wdXRDb250YWN0QWRkcmVzcylcblxuICAgICAgICBsZXQgbmV3Q29udGFjdCA9IHtcbiAgICAgICAgICAgIG5hbWU6IGlucHV0Q29udGFjdE5hbWUsXG4gICAgICAgICAgICBudW1iZXI6IGlucHV0Q29udGFjdE51bWJlcixcbiAgICAgICAgICAgIGFkZHJlc3M6IGlucHV0Q29udGFjdEFkZHJlc3NcbiAgICAgICAgfVxuICAgICAgICBjb250YWN0Q29sbGVjdGlvbi5wb3N0QWxsQ29udGFjdHMobmV3Q29udGFjdClcblxuICAgICAgICB9XG4gICAgfVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RGb3JtOyIsIi8vIEEgQ29udGFjdExpc3QgY29tcG9uZW50IHRoYXQgZGlzcGxheXMgYWxsIGNvbnRhY3RzLlxuLy8gSXQgc2hvdWxkIGltcG9ydCB0aGUgQ29udGFjdCBjb21wb25lbnQgYW5kIHRoZSBDb250YWN0Q29sbGVjdGlvbiBjb21wb25lbnQuXG5pbXBvcnQgY29udGFjdENvbGxlY3Rpb24gZnJvbSBcIi4vQ29udGFjdENvbGxlY3Rpb25cIlxuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vQ29udGFjdFwiXG5cbmNvbnN0IGNvbnRhY3RMaXN0ID0ge1xuICAgIGNvbnRhY3RpZnkoKXtcbiAgICAgICAgY29udGFjdENvbGxlY3Rpb24uZ2V0QWxsQ29udGFjdHMoKVxuICAgICAgICAudGhlbihhbGxDb250YWN0cyA9PntcbiAgICAgICAgICAgIGxldCBjb250YWN0RG9jRnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcbiAgICAgICAgICAgIGFsbENvbnRhY3RzLmZvckVhY2goY29udGFjdEl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjb250YWN0SFRNTCA9IGNvbnRhY3QuY29udGFjdEJ1aWxkZXIoY29udGFjdEl0ZW0pXG4gICAgICAgICAgICAgICAgY29udGFjdERvY0ZyYWdtZW50LmFwcGVuZENoaWxkKGNvbnRhY3RIVE1MKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsZXQgb3V0cHV0QXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpXG4gICAgICAgICAgICBvdXRwdXRBcnRpY2xlLmFwcGVuZENoaWxkKGNvbnRhY3REb2NGcmFnbWVudClcblxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdExpc3RcbiIsImltcG9ydCBjb250YWN0TGlzdCBmcm9tIFwiLi9Db250YWN0TGlzdFwiXG5pbXBvcnQgY29udGFjdEZvcm0gZnJvbSBcIi4vQ29udGFjdEZvcm1cIlxuXG5jb250YWN0TGlzdC5jb250YWN0aWZ5KClcbmNvbnRhY3RGb3JtLmNyZWF0ZUFuZEFwcGVuZEZvcm0oKVxuXG5cblxuIl19