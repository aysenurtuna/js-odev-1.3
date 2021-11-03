
let mukemmelSayilar = []

function mukemmelSayi() {
    for (let i = 1; i < 1000; i++) {
        let total=0
        for (let j = 1; j <= i; j++) {
            if(i%j==0){
                total += j
            }
        }
        if(2*i == total){
            mukemmelSayilar.push(i)
        }
    }
    console.log(...mukemmelSayilar)
}
mukemmelSayi()