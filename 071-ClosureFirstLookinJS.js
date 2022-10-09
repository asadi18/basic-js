function a() {
    let x = 5
    return function () {
        console.log(x)
    }
}
    let abc = a
    console.dir(abc)