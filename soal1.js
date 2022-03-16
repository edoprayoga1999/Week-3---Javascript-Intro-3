const cekHariKerja = (day) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"]
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek){
                resolve(cek)
            } else {
                reject(new Error("Hari ini bukan hari kerja"))
            }
        }, 3000);
    })
}
const tampilHasil = (data) => {
    return `Hari ${data} adalah hari kerja`
}
let hariIni
switch (new Date().getDay()) {
    case 0:
        hariIni = "Minggu"
        break
    case 1:
        hariIni = "Senin"
        break
    case 2:
        hariIni = "Selasa"
        break
    case 3:
        hariIni = "Rabu"
        break
    case 4:
        hariIni = "Kamis"
        break
    case 5:
        hariIni = "Jumat"
        break
    case 6:
        hariIni = "Sabtu"
        break
}
console.log("Sedang mengecek apakah hari ini hari kerja atau tidak...")

// cekHariKerja(hariIni.toLowerCase())                    // Menjalankan fungsi cekHariKerja dan mengirim parameter hariIni
// .then((result) => {                      // Akan dijalankan jika hasilnya resolve
//     console.log(tampilHasil(result))
// })
// .catch((error) => {                      // Akan dijalankan jika terdapat error
//     console.log(error.message)
// })
// .finally(() => {                         // Akan tetap dijalankan meskipun terdapat resolve atau error.
//     console.log("Proses selesai.")
// })

// const main = async () => {
//     try {                                                // Menjalankan try sebagai langkah awal
//         const hasil = await cekHariKerja(hariIni.toLowerCase())        // Memakai 'await' agar ditunggu dulu baru proses selanjutnya dijalankan
//         console.log(tampilHasil(hasil))
//     } catch (err) {                                      // Akan dijalankan ketika menangkap hasil error
//         console.log(err.message)
//     } finally {                                          // Akan tetap dijalankan meskipun terdapat error atau tidak
//         console.log("Proses selesai.")
//     }
// }
// main()