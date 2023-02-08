//runs the code after desired time
const testTimeout = () => {
    console.log('Hello World')
}
//// if this is run the testTimeout function won't run 
// if(true){
//     clearTimeout(testTimeOut)
// }

const testTimeOut = setTimeout(testTimeout, 2000)


// Runs infinitely until it is cleared or window is closed
let counter = 0

const count = () => {
    console.log(counter)
    counter++

    if(counter === 6){
        clearInterval(testInterval)
    }
}

const testInterval = setInterval(count, 2000)
