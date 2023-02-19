// The activities below were created by artificial intelligence, using a language model trained by neural learning.

// console.log("###################### 1 ######################")



let arrAy = [
    {name: 'john', age: 21},
    {name: 'david', age: 12},
    {name: 'bob', age: 19},
    {name: 'rick', age: 30},
]

for (let i = 0; i < arrAy.length; i++){
    if(arrAy[i].age >= 18) {
            console.log(`${arrAy[i].name} is of legal age`);
    }else if (arrAy[i].age < 18) {
        console.log(`${arrAy[i].name} is a minor`)
    }

}

// console.log("###################### 2 ######################")


//2 - Create a function that receives 2 parameters, an array of objects and a name as a string, you must filter this array only if the name is in the object, as in the example:



let value =  [
    {name: 'John', age: 21},
    {name: 'John Elway', age: 12},
    {name: 'Bob', age: 19},
    {name: 'Mathew John', age: 30},
    {name: 'Maia', age: 31},
    {name: 'Andrew', age: 22},
    {name: 'John Lennon', age: 29},

]

function filterArray(valuee, array) {

    let filterr = array.filter(y =>
        y.name.includes(valuee)
    );
    console.log(filterr)
    
}

filterArray('John',value);