const dictionaryBtn = document.querySelector(".dictionaryBtn");
const dictionaryContent = document.querySelector(".dictionaryContent");
const dictionaryInput = document.getElementById("dictionaryInput");
const dictionaryVideo = document.getElementById("dictionaryVideo");
const dictionaryContentTitle = document.querySelector(".dictionaryContentTitle");
const dictionaryMeaning = document.querySelector(".dictionaryMeaning");






async function getWords() {

    dictionaryContent.style.display = "none"
   try {
    const result = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${dictionaryInput.value}`)
   .then(res => res.json());
    //console.log(result)

    if(result.title){

    }
    else {
        console.log(result)
        dictionaryContent.style.display = "block"
        dictionaryContentTitle.textContent = result[0].word;
        dictionaryMeaning.textContent = result[0].meanings[0].definitions[0].definition;
        dictionaryVideo.src = result[0].phonetics[0].audio;

    }
    
   } catch (error) {
    console.error("error: " ,error)
   }


}


dictionaryBtn.addEventListener("click",getWords);