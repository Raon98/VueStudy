// 1. Async - Await

// async testFunction() {
//     const response = await axios.get('api/test')
//     console.log(response)
//     const response2 = await axios.get('api/test')
//     console.log(response2)
// }

//2. 반복문과 async -await

// testFunction() {
//     const data = [1,2,3,4,5]
//
//     data.forEach(async (e,i) => {
//         const response = await axios.get('api/test', e)
//         console.log(response)
//     })
// }

//3. (2) 문제를 해결하기위한 reduce

// testFunction() {
//     const data = [1,2,3,4,5]
//
//     data.reduce((previous, current) => {
//         return previous.then(async () => {
//             await axios.get('api/test', current)
//             console.log(response)
//         })
//     }, Promise.resolve())->  원래 첫번째 값은 undefined 이지만 promiss 객체를 사용한다고 인식하게 만듬
//          첫 번째 반복: previous - Promise.resolve() / 1을 파라미터로 한 axios request 및 response를 포함한 결과
//          두 번째 반복: previous - 첫 번쨰 반복 수행 결과 / 2를 파라미터로 한 axios request 및 response를 포함한 결과
// }


// testFunction() {
//     const data = [1,2,3,4,5]
//     data.reduce((previous, current) => { return previous + current }, 10) -> 10은 초기값 10 + 1 + 2+ 3 + 4+ 5
// }
// }

// => previous는 reduce() 반복문을 수행하면서 현재 이전까지 수행한 결과를 나타냅니다.
//    current가 현재 반복문의 element입니다.

