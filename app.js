//Have to Geneeate a Random number from 1 to 6 for two of the dices.  We can't use the same random numbers for two of the dices as this way, we won't be able to know who wins;


const firstRandomNum=Math.floor(Math.random()*6)+1;
const sectRandomNum=Math.floor(Math.random()*6)+1;

const firstImage='dice'+firstRandomNum+'.png'
const secImage='dice'+sectRandomNum+'.png';
const h1=document.querySelector('.h1')


document.querySelectorAll('img')[0].setAttribute('src',firstImage)
document.querySelectorAll('img')[1].setAttribute('src',secImage)


//Condtions Go here(The Main Part)

if(firstRandomNum==6 &&sectRandomNum<firstRandomNum){

    h1.textContent='The User1 Is the Winner'
}

else if(sectRandomNum==6 && firstRandomNum <sectRandomNum){
    h1.textContent='The User2 Is the Winner'



} else if(firstRandomNum==sectRandomNum){
    h1.textContent='Its a Tie'

} else{

    h1.textContent='';

}