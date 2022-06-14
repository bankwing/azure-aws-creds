const ipcRenderer = require('electron').ipcRenderer;
let samlRegx = new RegExp(/name="SAMLResponse"/, "i");


document.addEventListener("DOMContentLoaded", function () {
  let doc = document.documentElement.innerHTML;
  ipcRenderer.sendToHost('debug','AzureAD document loaded')
  
  if (samlRegx.test(doc)) {
    let token = document.querySelector('input[name="SAMLResponse"]').value;
    ipcRenderer.sendToHost('debug','SAML token found in webview')
    ipcRenderer.sendToHost('debug',"SAML token contents: " + token)
    ipcRenderer.sendToHost('saml_token_found', token)
    ipcRenderer.sendToHost('debug','wait for select roles');

  }
});

