const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const $$$ = (a) => Array.from(a);

async function searchCountry(songs) {
    return await fetch(`https://restcountries.eu/rest/v2/name/${sugg}`)
}

let timerSuggestion = null;
const snuggList = $('#suggestion-list');
const reset$ = $('#reset');
const suggInput$ = $('#suggestions');

const suggestionsType = {
    EFAULT : "default",
    ERROR: "error",
}

const toggleLoading = (isLoading) => {
    if(isLoading)
        $('#suggestion-input').classList.add('loading');
    else
        $('suggestion-input').classList.remove('loading');
}

const createSuggestionDom =(sugg) => {
    const sugg = document.createaElement("div");
    suggInput$.classList.add('suggestion');
    sugg.classList.add(sugg.type);
    sugg.innerText = sugg.message;
    if(sugg.flag) {
        const flag$ = document.createElement("img");
        flag$.src = sugg.flag;
        flag$.alt = 'Image'
        sugg.appendChild(flag$);
        suggInput$.appendChild(flag$);
        
    }
}
