// GET LANGUAGE USER 

let lang = '';
if (typeof window !== "undefined") lang = window.navigator.language;


// 

const language = lang.substr(0, 2).toLowerCase();
console.log(language);
