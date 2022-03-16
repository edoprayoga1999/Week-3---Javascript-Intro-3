const angka = "5"
const step1 = () => {
    console.log("Sedang mengecek bilangan ganjil atau genap...")
}
const step2 = (num) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const tipeData = typeof(num)
            if (tipeData == "number") {
                console.log("Data adalah number. Melanjutkan proses pengecekan...")
                resolve(num)
            } else {
                reject(new Error("Data bukan number. Mohon cek kembali input anda"))
            }
        }, 3000);
    })
}
const step3 = (number) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const cekGenap = number % 2
            if (cekGenap == 0) {
                resolve("Data adalah bilangan genap")
            } else {
                reject(new Error("Data adalah bilangan ganjil"))
            }
        }, 2000);
    })
}
const finalStep = () => {
    console.log("Proses selesai")
}
step1()
step2(angka)
.then((result) => {
    step3(result)
    .then((finalRes) => { 
        console.log(finalRes)
    })
    .catch((finalErr) => {
        console.log(finalErr.message)
    })
    .finally(() => {
        finalStep()
    })
})
.catch((error) => {
    console.log(error.message)
    finalStep()
})