for (let i = 0; i < 5; i++) {
    let inner = '';
    for (let j = 10; j > 5; j--) {
        inner += j + ' ';
    }
    console.log("Outer: " + i + ", inner: " + inner);
}
