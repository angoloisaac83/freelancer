let email = document.getElementById('email')
let password = document.getElementById('password')
let data = []
function hh(){
    data.push({EmailAdress: email.value,Pass: password.value})
    let userdata = JSON.stringify(data)
    localStorage.setItem('data',userdata)
}
let db;
let mun = 0;
const openRequest = indexedDB.open('myDatabase', 2);

openRequest.onupgradeneeded = function (e) {
    db = e.target.result;
    console.log('running onupgradeneeded');
    const storeOS = db.createObjectStore('myDatabaseStore',  {keyPath: "name"});
                
};
openRequest.onsuccess = function (e) {
    console.log('running onsuccess');
    db = e.target.result;
    // addItem();
};
openRequest.onerror = function (e) {
    console.log('onerror! doesnt work');
    console.dir(e);
};

function hh() {
    mun++
    data.push({
        name: `user${mun}`,
        Email: email.value,
        Password: password.value,
        created: new Date().getTime(),
    });
    alert('a')
    const tx = db.transaction("myDatabaseStore", "readwrite");
    const store = tx.objectStore('myDatabaseStore');
    data.forEach(dta=>{
         store.add(dta);
    })
   
}