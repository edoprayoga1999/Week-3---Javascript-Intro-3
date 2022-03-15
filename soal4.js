import fetch from 'node-fetch';
const tampilkanData = (data) => {
    data.map((e) => {
        console.log(e.name)
    })
}
const main = async () => {
    try {
        const dataApi = await fetch("https://jsonplaceholder.typicode.com/users")
        const convert = await dataApi.json()
        tampilkanData(convert)
    } catch (err) {
    console.log(err)
}
}
main ()