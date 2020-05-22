const range = 100; //재할당되지 않는 const 변수. var 나 let은 변수지정시 재할당 가능변수
const answer = Math.ceil(Math.random()*range); //정답을 저장하고 있는 변수를 설정하는 것. Math.random 은 0~1의 수를 랜덤으로 뽑아줌.
// Math.ceil() 함수는 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환합니다
console.log(answer); //제작 과정 중이니까 콘솔에 answer를 찍어놓는다고 하네.

const inputTag = document.getElementById("input");
const resultDiv = document.getElementById("result");
const formBtn = document.getElementById("formBtn");
const displayLife = document.getElementById("lifecnt");

let life = 5; //life는 계속 깎이기 때문에 재할당이 가능한 let으로 설정.
formBtn.onclick = (event) => {    //화살표 함수.
    life -= 1;   //버튼을 클릭하면 목숨이 하나씩 깎여야 되기 때문에 라이프를 1씩 깎이게.
    displayLife.textContent = life; //life가 몇인지 계속 바껴야하기 때문에.
    const userInput = Number(inputTag.value); //inputTag.value 값이 문자열 상태이기 때문에 비교에 용이하게 Number로 변화시켜줌.
    const result = document.createElement('h2'); //html요소를 JS에서도 추가할 수 있음. h2 tag를 새로 만든다는 의미
    result.textContent = userInput + "->";

    if (userInput === answer) {
        result.textContent += "Answer"; //정답이면 정답표시와 함께 새로고침 해줄 것. += 이게 value = value + 10; 의 의미를 가지고 있다고 하네.
        alert("You are correct!");
    }
    else { //정답이 아닐 때는 목숨이 남았을 때와 남지 않았을 때로 나눠야하죠.
        if (life>0){
            event.preventDefault(); //form을 제시할 때 자동으로 새로고침 되기 때문에 preventDefault로 막아줌.
            (userInput > answer) ? (result.textContent += "down"):(result.textContent += "up"); //삼항연산자 : A ? B : C 일 때 A 가 맞으면 B를 틀리면 C를 반환해주는 연산자. 꼭 if else 문을 쓰지 않고 한 줄로 이렇게 쓸 수 있음.
            inputTag.focus(); // 커서의 위치를 유지시켜줌. 이렇게 해야 편하네.
        }
        else {
            alert("You failed\n The answer is " + answer); //\n 은 html 의 <br>이랑 똑같네

        }
    }
    
    resultDiv.append(result);
    inputTag.value =' ';  //한번의 트라이가 끝날 때마다 input 칸을 비워주는 역할.
}
