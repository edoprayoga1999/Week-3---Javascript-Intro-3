const getMonth =  (callback) => {
    setTimeout(() => {
        let error = false
        let month = ["January", "February", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
        if(!error) {
            callback(null, month)
        } else {
            callback(new Error("Sorry data not found"), [])
        }
    }, 4000);
}
const cb = (err, data) => {
    if (err) {
        console.log(err.message)
    } else {
        data.map((e, i) => {
            let num = i + 1
            console.log(`${num}. ${e}`)
        })
    } console.log("Proses selesai.")
}
console.log("Menampilkan nama bulan pada kalender masehi....")
getMonth(cb)