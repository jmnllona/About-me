import { useNavigate } from "react-router-dom";
import { useState } from "react";



const question : Record<any, any > = {
pokedex : {question: "whos this pokemon?" , answer: "pikachu" },
pokemon1 : {question: "whos this pokemon?" , answer: "pikachu" },
pokemon2 : {question: "whos this pokemon?" , answer: "pikachu" },

}






function Dialog({name} : {name : string}){
const [answer, setAnswer] = useState("");
const navigate = useNavigate();

const handleSubmit = ()=> {


 if(answer.trim() === question[name].answer){
 navigate(`/${name}/`);
 console.log(`/${name}/`)
 }
 else {alert("pls try again"); setAnswer("")}
}





return(<div className="flex flex-col gap-3">
<p className="mb-3">{question[name].question}</p>
<input  id="answer" value={answer} onChange={(e) =>setAnswer(e.target.value)} className="border "></input>
<button onClick={handleSubmit}>Submit</button>
</div>)

}







export default function  Hobbies(){

    const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);
    const [pageName, setPageName] = useState<string>("");


const handleClick = (e : any)=> {
setPageName(e.target.name);
setDialogIsOpen(true);
}


return(
    
<div className="flex flex-col w-full max-w-6xl gap-3">
    <div className="flex gap-2">

        <button name="pokedex" onClick={handleClick}>go to pokemon</button>
    </div>

    {dialogIsOpen && (
        <Dialog name={pageName}></Dialog>
    )}




</div>

)

}