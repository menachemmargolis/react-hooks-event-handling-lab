// Code EyesOnMe Component Here
function EyesOnMe(){
    return (
        <button onFocus = {e => console.log('Good!')} onBlur ={e=> console.log('Hey! Eyes on me!') }>Eyes on me</button>
    )
}
export default EyesOnMe;


// In the components/EyesOnMe.js file, create a EyesOnMe React component.
// In that component, render a button with the text 'Eyes on me'.
// On that button, add event handlers that listens for the focus and blur events.
// When the focus event fires, use console.log to print out the text 'Good!'.
// When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.