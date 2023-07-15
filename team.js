// - 컴퓨터는 0과 9 사이의 서로 다른 숫자 3개를 무작위로 뽑습니다. (ex) 123, 759

//generateRandomNumbers 함수로 numbers라는 빈 배열을 선언
function generateRandomNumbers() {
    var numbers = [];

//이 함수는 numbers 배열의 길이가 3보다 작을 때 반복문 실행
    while(numbers.length < 3) {
        var randomNum = Math.floor(Math.random() * 10) //0~9까지의 난수 생성

//numbers.include(randomNum)을 활용해 배열에 randomNum이 이미 있는지 확인
//존재하지 않는다면, randomNum을 배열에 추가
        if(!numbers.includes(randomNum)){
            numbers.push(randomNum);
        }
    }

    return numbers;
}

//arr.join('')을 활용해서 조합
function combineNumbers(arr) {
    return arr.join('');
}

var randomNumbers = generateRandomNumbers();
var combinedNumber = combineNumbers(randomNumbers);
console.log(combinedNumber);





// - 컴퓨터는 사용자가 입력한 세자리 숫자에 대해서, 아래의 규칙대로 스트라이크(S)와 볼(B)를 알려줍니다.

//     - 숫자의 값과 위치가 모두 일치하면 S


//     - 숫자의 값은 일치하지만 위치가 틀렸으면 B


// - 기회는 무제한이며, 몇번의 시도 후에 맞췄는지 기록됩니다.

// - 숫자 3개를 모두 맞춘 경우, 게임을 종료합니다.