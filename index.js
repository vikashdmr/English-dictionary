let inputs = document.getElementById("input");

const infotext = document.getElementById("info-text");

const meningcontener= document.getElementById("meaning-contener");

const titleE1 = document.getElementById("title");

const meaningE1 = document.getElementById("meaning");

const audioE1 = document.getElementById("audio");



async function fetchaPI(word){
    try{
        infotext.style.display= "block";
        meningcontener.style.display="none";
        infotext.innerText =` serching the mening of "${word}`; 

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    const result = await fetch(url).then((res)=> res.json());

    infotext.style.display= "none";

    meningcontener.style.display="block";

    titleE1.innerText= result[0].word;

    meaningE1.innerText= result[0].meanings[0].definitions[0].definition;

    audioE1.src= result[0].phonetics[0].audio;

    } catch (error) {
        console.log(error);
    }
    
}
inputs.addEventListener("keyup", (e)=>{
    if(e.target.value && e.key === "Enter"){
        fetchaPI(e.target.value);
    }
});
