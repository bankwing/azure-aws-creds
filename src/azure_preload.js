const ipcRenderer = require('electron').ipcRenderer;
let samlRegx = new RegExp(/name="SAMLResponse"/, "i");

document.addEventListener("DOMContentLoaded", function () {
  let doc = document.documentElement.innerHTML;
  ipcRenderer.sendSync('send-debug', 'AzureAD document loaded')
  if (samlRegx.test(doc)) {
    let token = document.querySelector('input[name="SAMLResponse"]').value;
    ipcRenderer.sendSync('send-debug', 'SAML token found in webview')
    ipcRenderer.sendSync('send-debug', "SAML token contents: " + token)
    ipcRenderer.sendSync('saml_token_found', token);
    ipcRenderer.sendSync('send-debug', 'wait for select roles');

  }
});
