// preload with contextIsolation enabled
const { contextBridge, ipcRenderer} = require('electron')


contextBridge.exposeInMainWorld('bridgeAPI', {
  listProfiles: () => {
    console.log('preload:bridgeAPI:listProfiles')
    return ipcRenderer.sendSync('list-profiles', {})
  },
  profileSelected: (profile) => {
    console.log('preload:bridgeAPI:profileSelected')
    return ipcRenderer.sendSync('azure-login', profile)
  },
  editProfile: (profile) => {
    console.log('preload:bridgeAPI:editProfile')
    return ipcRenderer.sendSync('edit-profile', profile)
  },
  getProfile: () => {
    console.log('preload:bridgeAPI:getProfile')
    return ipcRenderer.sendSync('get-profile', {})
  },
  showStats: () => {
    console.log('preload:bridgeAPI:showStats')
    return ipcRenderer.sendSync('show-stats', {})
  },
  saveProfile: (data) => {
    console.log('preload:bridgeAPI:saveProfile')
    return ipcRenderer.sendSync('save-profile', data)
  },
  samlTokenFound: (data) => {
    console.log('preload:bridgeAPI:samlTokenFound')
    return ipcRenderer.sendSync('saml_token_found', data)
  },
  sendDebug: (data) => {
    console.log('preload:bridgeAPI:sendDebug')
    return ipcRenderer.sendSync('send-debug', data)
  },
  getRoles: () => {
    console.log('preload:bridgeAPI:getRoles')
    return ipcRenderer.sendSync('get-roles', {})
  },
  roleChoice: (data) => {
    console.log('preload:bridgeAPI:roleChoice')
    return ipcRenderer.sendSync('role-choice', data)
  },
  getErrors: () => {
    console.log('preload:bridgeAPI:roleChoice')
    return ipcRenderer.sendSync('get-errors', {})
  },
  

  
  
  
})