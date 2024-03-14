const result = document.querySelector('.result')
const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const refresh = document.querySelector('.refresh')



refresh.addEventListener('click' , ()=>{
      let number1 = Math.floor(Math.random() * 6 + 1)
      img1.src =`images/dice${number1}.png`

      let number2 = Math.floor(Math.random() * 6 + 1)
      img2.src =`images/dice${number2}.png`

      if (number1 > number2) {
            result.textContent = 'player 1 win'
      }else if(number2 > number1){
            result.textContent = 'player 2 win'
      }else if(number1 === number2){
            result.textContent = 'draw'
      }else{
            result.textContent = 'error'
      }
})