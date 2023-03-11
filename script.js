function OpeningCeremony(Race100M){
    setTimeout(()=>{
        console.log("Let the games begin")
        score = {red:0,blue:0,green:0,yellow:0}
        console.log("starting scores",score)
        Race100M(score,LongJump)
    },2000) 
}



function Race100M(score,LongJump){
  const redTime = getRndInteger(1, 15);
  const blueTime = getRndInteger(1, 15)
  const greenTime = getRndInteger(1, 15)
  const yellowTime = getRndInteger(1, 15)

  const times = [redTime, blueTime, greenTime, yellowTime];
//   console.log("times",times)

  const sortedTimes = times.slice().sort(function(a, b){return a - b});
//   console.log("sortedTimes",sortedTimes);

  const firstPlace  = times.indexOf(sortedTimes[0]);
  const secondPlace = times.indexOf(sortedTimes[1]);
//   console.log(firstPlace,secondPlace);

  score[Object.keys(score)[firstPlace]] += 50;
  score[Object.keys(score)[secondPlace]] += 25;
  console.log(Object.keys(score)[firstPlace],"color won the 100M Race" )
  console.log("scores of 100M Race",score);
  // console.log(Object.keys(score))
  // console.log(Object.keys(score)[firstPlace])
  LongJump(score, HighJump)
}

function LongJump(score, HighJump){
    setTimeout(()=>{
        let rndm = Math.floor((Math.random() * 3) + 1)
    // console.log(Object.keys(score)[rndm],"random Object")
       score[Object.keys(score)[rndm]] +=150;
       console.log(Object.keys(score)[rndm],"color won the LongJump")
       console.log("scores of LongJump",score);
       HighJump(score)
    },3000)
}

function HighJump(score){
   setTimeout(()=>{
    let person = prompt("What colour secured the highest jump");
    switch (person) {
        case 'red':
          score['red'] +=100;
          console.log("red color won the highest jump race")
          break;
        case 'green':
            score['green'] +=100;
            console.log("green color won the highest jump race")
          break;
        case 'blue':
            score['blue'] +=100;
            console.log("blue color won the highest jump race")
          break;
        case 'yellow':
            score['yellow'] +=100;
            console.log("yellow color won the highest jump race")
          break;
        default:
          console.log("Event was cancelled");
      }
      console.log("scores of HighJump",score)
      AwardCeremony(score)
   },3000)

}

function AwardCeremony(score){
    let arr = []
    for(let keys in score){
        arr.push(score[keys])
    }
    let sortedArr = arr.slice().sort(function(a, b){return b - a})
    const firstPlace  = arr.indexOf(sortedArr[0]);
    const secondPlace = arr.indexOf(sortedArr[1]);
    const thirdPlace = arr.indexOf(sortedArr[2]);

    console.log(Object.keys(score)[firstPlace],"color won the first place" )
    console.log(Object.keys(score)[secondPlace],"color won the second place" )
    console.log(Object.keys(score)[thirdPlace],"color won the third place" )
   
    console.log("final Score",score)

}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let btn = document.getElementById("btn")

btn.addEventListener("click",OpeningCeremony(Race100M))