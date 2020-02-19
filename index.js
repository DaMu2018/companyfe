function setLocalStorage(name, data) {
    localStorage.setItem(name, data)
}
function setSessionStorage(name, data) {
    sessionStorage.setItem(name, data)
}

let demo = {
    demo1: (aa) => {console.log('aa :', aa);},
    demo2: (aa) => {console.log('22aa :', aa);}
}

let test = (res) => {console.log('res :', res);}

function getLocalStorage(name) {
    return localStorage.getItem(name)
}
function getSessionStorage(name) {
    return sessionStorage.getItem(name)
}

function clearLocalStorage() {
    return localStorage.clear()
}
function clearSessionStorage() {
    return sessionStorage.clear();
}

function removeSessionStorage(name) {
    return sessionStorage.removeItem(name)
}

export {
    setLocalStorage,
    demo,
    test
}