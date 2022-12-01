const Button = ({text, handleClick}) => {
    return <button onClick={handleClick}>{text}</button>
}
export default Button;

//App.js
/*
<Button text= "submit" handleClick={}/>
<Button text= "search" handleClick={}/>*/