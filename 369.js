//const max = 100; //max 값은 변하면 안되기 때문에 const로 변수 지정.

const max = document.getElementById("input");
let i = 1; //시작값은 1이었기 때문에 let으로 변수 지정
let num369 =0; // 369의 개수에 따라 박수를 몇번칠지 결정할 때 쓰일 변수 지정.
const formBtn = document.getElementById("TryBtn");
formBtn.onclick = (event) => { 
    for(i=1;i<=max.value;i++){  //i는 1부터, max를  넘으면 안되고, 1씩 증가.
    let element = document.createElement('div'); // element라는 변수를 생성하고 html의 새로운 div태그를 만드는 변수 설정.
    document.body.append(element); // 이 div는 차곡차곡 쌓여야 하기 때문에 append 사용, 추가로 body에 넣을 것임.
    let temp = i; //i는 for문을 위해서 가만히 두고, 임시변수 temp로 while문 작동.
    while(temp!=0){ //마지막 temp가 0이 되면 멈추는 걸로. 만약 73이면 //7은 0이 아니다
        if((temp%10===3)||(temp%10===6)||(temp%10===9)){ //73을 10으로 나눴을 때 나머지가 3 

            num369++; //박수를 ㅊ ㅕ야하기 때문에 num369도 +1 // 박수 횟수만큼 num369가 누적됨.
        }
        temp = Math.floor(temp/10); //temp를 10으로 나누어주고 내림. 73/10 = 7.3 에서 내림을 하면 7 다시 위로.
    }

    if (num369===0){  //num369가 0이라면 박수를 치지 않고 숫자를 넣어야 함.
        element.textContent = i
      
        //element.textContent = i //이전에 만든 element태그에 i를 넣어준다는 걸 넣어줌
        
    }
    else{
        element.textContent = "👏".repeat(num369); //0이 아니라면 num369만큼 짝을 repeat.
    }
    num369=0; //for문이 한번 가동됐을 때 다시 num369가 0이 되어야함.
} alert('한 번 더 하고싶으시면 새로고침하세요!') ;
}