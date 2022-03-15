const listUsername = ["ahmadsahroni66","indrakenz77","donisalmanan88","juragan99"]

const step1 = () => {
    console.log("Mengecek username...")
}
const step2 = (name,dataName) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const cekUsername = dataName.includes(name)
            if (cekUsername) {
                reject(new Error("Username '"+name+"' tidak dapat digunakan atau telah dipakai"))
            } else if (name.length <= 4) {
                reject(new Error("Username harus lebih dari 4 huruf/angka"))
            } else {
                resolve("Username '"+name+"' dapat digunakan")
            }
        }, 4000);
    })
}
const finalStep = () => {
    console.log("Proses selesai.")
}
step1()
step2("ahmadsahroni66", listUsername)
.then((result) => {
    console.log(result)
})
.catch((error) => {
    console.log(error.message)
})
.finally(() => {
    finalStep()
})