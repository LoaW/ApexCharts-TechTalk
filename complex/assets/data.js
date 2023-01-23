export function generateData() {
    let data = [];
    for (let i = 0; i < 10; i++) {
        data.push(Math.floor(Math.random() * 100));
    }
    return data
}
