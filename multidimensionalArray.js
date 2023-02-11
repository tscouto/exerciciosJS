// The activities below were created by artificial intelligence, using a language model trained by neural learning.

// console.log("###################### 1 ######################")

function old_woman(array) {

                                 
   for(let i = 0; i < array.length; i++ ) {
        if(array[i][0] === array[i][1] && array[i][1] === array[i][2]) {
            return `Win player ${array[i][1]}`
        };
            }
            for(let i = 0; i < array.length; i++ ) { 
                if(array[0][i] === array[1][i] && array[1][i] === array[2][i]) {
                    return `Win player ${array[0][i]}`
                }
            };

            if (array[0][0] === array[1][1] && array[1][1] === array[2][2]){
                return `Win player ${array[0][0]}`
            }
            if (array[0][2] === array[1][1] && array[1][1] === array[2][0]){
                return `Win player ${array[2][0]}`
            }

            return `There was a tie `

   }                              

let value = [
    ['x', '0', 'x'],
    ['x', 'x', 'o'],
    ['o', 'o', 'x']
]

let value2 = [
    ['x', 'o', 'x'],
    ['x', 'o', 'o'],
    ['o', 'o', 'x']
]

// console.log(old_woman(value2));





// console.log("###################### 2 ######################")
// Create an array to represent an image and write a function to rotate it 90 degrees clockwise.
/*



Examples: 
(Input)
[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
(Output)
[
    [7,4,1],
    [8,5,2],
    [9,6,3]
]

(Input)
[
    ['A', 'B', 'C'],
    ['A', 'B', 'C'],
    ['A', 'B', 'C'],
    ['A', 'B', 'C'],
    ['A', 'B', 'C'],
]
(Output)
[
    ['A', 'A', 'A', 'A', 'A'],
    ['B', 'B', 'B', 'B', 'B'],
    ['C', 'C', 'C', 'C', 'C'],
]

*/

function Rotate(value) {
    for(let i = 0; i< value.length; i++) {
        if(value[i][0] === 1 && value[i][1] === 2 && value[i][2] === 3) {
           return value[i][0] = value[2][0] , value[i][0] = value[2][1], value[i][0] = value[2][2]
        }
    }
}

let valuee = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(Rotate(valuee));