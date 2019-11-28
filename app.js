function init() {
  const DomStrings = {
    modal: document.querySelector("#modal"),
    toggleButton: document.querySelector(".orange-button"),
    emailInput: document.querySelector("#email"),
    close: document.querySelector(".close"),
    responseMessage: document.querySelector(".response-message"),
    message: document.querySelector(".message"),
    first: document.querySelector("#first"),
    last: document.querySelector("#last"),
    modalEmail: document.querySelector("#email-modal"),
    contact: document.querySelector("#contact"),
    modalSubButton: document.querySelector(".modal-button"),
    modalMessage: document.querySelector(".modal-res-message"),
    successContainer: document.querySelector(".success"),
    successMessage: document.querySelector(".success-message")
  };

  onSubmit(DomStrings);
  onModalSubmit(DomStrings);
  closeModal(DomStrings);
}

function onSubmit(DomStrings) {
  var toggleButton = DomStrings.toggleButton;
  var message = DomStrings.message;

  toggleButton.onclick = function(e) {
    e.preventDefault();
    var emailInput = DomStrings.emailInput.value;
    var flag = checkEmail(emailInput);
    var errorText = "Only work email is accepted!";
    showResponse(flag, message, errorText);
    if (!flag) {
      postEmailData(DomStrings);
      if (emailInput) {
        openModal(DomStrings, flag);
      }
    }
  };
}

function openModal(DomStrings, flag) {
  var modal = DomStrings.modal;
  if (!flag) {
    modal.style.display = "block";
  }
}
function clearFieldModal(DomStrings) {
  var emailInput = DomStrings.modalEmail;
  var first = DomStrings.first;
  var last = DomStrings.last;
  var contact = DomStrings.contact;

  emailInput.value = "";
  first.value = "";
  last.value = "";
  contact.value = "";
}

function clearFieldEmail(DomStrings) {
  var emailInput = DomStrings.emailInput;

  emailInput.value = "";
}

function closeModal(DomStrings) {
  var close = DomStrings.close;
  var modal = DomStrings.modal;
  modal.onclick = function(e) {
    e.preventDefault();
    if (e.target === modal || e.target === close) {
      modal.style.display = "none";
    }
  };
}

function showResponse(flag, container, text) {
  if (flag) {
    container.style.display = "block";
    container.textContent = text;
  }
  if (!flag) {
    container.style.display = "none";
    container.textContent = text;
  }
}

function checkEmail(checkEmail) {
  if (checkEmail) {
    var check = ["gmail", "hotmail", "yahoo"];
    if (checkEmail.includes(check[0])) {
      return true;
    }
    if (checkEmail.includes(check[1])) {
      return true;
    }
    if (checkEmail.includes(check[2])) {
      return true;
    }
  }
  return false;
}

async function postRequest(data, portalId, formGuid) {
  var formRequest = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
  );
  const result = formRequest.json();
  result.then(res => console.log(res));
}

function postEmailData(DomStrings) {
  var emailInput = DomStrings.emailInput.value;



  const simple = {
    portalId: "5689982",
    formGuid: "8b0c483b-bc03-46ee-92da-e5ce917c6792"
  };

  var data = {
    submittedAt: Date.now(),
    fields: [
      {
        name: "email",
        value: `${emailInput}`
      },
      {
        name: "lead_source",
        value: ""
      },
      {
        name: "lead_source_medium",
        value: ""
      },
      {
        name: "lead_source_campaign",
        value: ""
      },
      {
        name: "lead_source_referrer",
        value: ""
      },
      {
        name: "lead_source_content",
        value: ""
      },
      {
        name: "lead_source_keyword",
        value: ""
      },
      {
        name: "google_analytics_user_id",
        value: ""
      },
      {
        name: "latest_source_medium",
        value: ""
      },
      {
        name: "latest_source_campaign",
        value: ""
      },
      {
        name: "latest_source_referrer",
        value: ""
      },
      {
        name: "latest_source_content",
        value: ""
      },
      {
        name: "latest_source_keyword",
        value: ""
      }
    ],
    context: {
      pageUri: document.uri,
      pageName: document.title
    }
  };
  if (emailInput) {
    postRequest(data, simple.portalId, simple.formGuid);
    clearFieldEmail(DomStrings);
  }
}
function onModalSubmit(DomStrings) {
  var modalbutton = DomStrings.modalSubButton;
  var modalMessage = DomStrings.modalMessage;
  modalbutton.addEventListener("click", function(e) {
    e.preventDefault();

    var emailInput = DomStrings.modalEmail.value;
    var flag = checkEmail(emailInput);
    var text = "Only work email is accepted!";
    showResponse(flag, modalMessage, text);

    if (!flag) {
      postModalData(DomStrings);
    }
  });
}
function postModalData(DomStrings) {
  var emailInput = DomStrings.modalEmail.value;
  var first = DomStrings.first.value;
  var last = DomStrings.last.value;
  var contact = DomStrings.contact.value;
  var successMessage = DomStrings.successMessage;

  const modal = {
    portalId: "5689982",
    formGuid: "26da5653-36ec-4492-89b1-46cf434ed887"
  };
  var data1 = {
    submittedAt: Date.now(),
    fields: [
      {
        name: "firstname",
        value: `${first}`
      },
      {
        name: "lastname",
        value: `${last}`
      },
      {
        name: "email",
        value: `${emailInput}`
      },
      {
        name: "phone",
        value: `${contact}`
      },
      {
        name: "lead_source",
        value: ""
      },
      {
        name: "lead_source_medium",
        value: ""
      },
      {
        name: "lead_source_campaign",
        value: ""
      },
      {
        name: "lead_source_referrer",
        value: ""
      },
      {
        name: "lead_source_content",
        value: ""
      },
      {
        name: "lead_source_keyword",
        value: ""
      },
      {
        name: "google_analytics_user_id",
        value: ""
      },
      {
        name: "latest_source_medium",
        value: ""
      },
      {
        name: "latest_source_campaign",
        value: ""
      },
      {
        name: "latest_source_referrer",
        value: ""
      },
      {
        name: "latest_source_content",
        value: ""
      },
      {
        name: "latest_source_keyword",
        value: ""
      }
    ],
    context: {
      pageUri: window.location.hostname,
      pageName: document.title
    }
  };
  if (first && last && (emailInput && contact)) {
    const successText = "Form has been submitted.";
    successMessage.classList.add("simple-success");
    showResponse(true, successMessage, successText);

    postRequest(data1, modal.portalId, modal.formGuid);
    clearFieldModal(DomStrings);
  }
}
window.addEventListener("DOMContentLoaded", init);
