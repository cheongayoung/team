// 1. 0~9까지 서로 다른 숫자 3개 출력

let answerArr = [];

while (answerArr.length < 3) {
    const randomNum = Math.floor(Math.random()*10 - 1);
    if (!answerArr.includes(randomNum)) {
        answerArr.push(randomNum);
    }
}

//console.log(answerArr);

console.log(
    `컴퓨터가 숫자를 생성했습니다. 답을 맞춰보세요!`
)

// 2. 값 입력

const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let Cnt = 0;

rl.on('line', (line) => {
    Cnt++;
    console.log(Cnt, "번째 시도 : ", line);
    match(line);
});

// 3. 스트라이크, 볼

let strike = 0;
let ball = 0;

function match(userAnswer) {
    for (let i = 0; i < userAnswer.length; i++) {
        if (Number(userAnswer[i]) == answerArr[i]) {
            strike++;
        } else if (answerArr.includes(Number(userAnswer))) {
            ball++;
        }
    }

    console.log(`${ball}B${strike}S`);

    if (strike === 3) {
        console.log(`${Cnt}번 만에 맞히셨습니다! 게임을 종료합니다!`)
        rl.close();
    } else {
        strike = 0;
        ball = 0;
    }
}
