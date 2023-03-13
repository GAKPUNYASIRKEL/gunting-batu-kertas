function com(){
    const com = Math.random();

    if( com < 0.34 ) return 'gunting'
    if( com >= 0.34 && com < 0.67) return 'batu'; 
    return 'kertas';
}

function hasil(com, player){
    if( player == com ) return 'SERI!';
    if( player == 'gunting' ) return ( com == 'batu' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'batu' ) return ( com == 'gunting' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'kertas' ) return ( com == 'batu' ) ? 'MENANG!' : 'KALAH' ;
}

function spin (){
    const imgComputer = document.querySelector('.img-komputer')
    const img = ['gunting', 'batu', 'kertas']
    let i = 0;
    const t0 = new Date().getTime();
    setInterval(function(){
        if (new Date().getTime() - t0 > 1000){
            clearInterval;
            return
        }
        imgComputer.setAttribute('src', 'img/' + img[i++] + '.png')
        if (i == img.length){
            i = 0
        }
    }, 100)
}


const info = document.querySelector('.info')
const li = document.querySelectorAll('li img');

li.forEach(function(pilihan){
    pilihan.addEventListener('click', function(){
            const c = com();
            const p = pilihan.className;
            const h = hasil(c, p) 

            spin()
            clearInterval(spin())

            const tes = setTimeout(function(){
                const imgCom = document.querySelector('.img-komputer')
                imgCom.setAttribute('src', 'img/' + c + '.png')
                info.innerHTML = h
            }, 1000)

    })
})
























// const gunting = document.querySelector('.gunting')
// const batu = document.querySelector('.batu')
// const kertas = document.querySelector('.kertas')
// 

