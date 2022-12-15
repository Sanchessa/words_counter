String.prototype.wordsCount = function() {
    return this.split(/[\s\.\?]+/).length;
}
let text = prompt("Вводи слова!");
text.wordsCount();
if(text.wordsCount() < 5){
    alert('СЛОООВ МАЛООО !!!!')
    prompt("Вводи заново!!!");
}
else{
    alert("Слов достаточно! МОЛОДЕЦ!")
}

let question = confirm("Хочешь начать заново?")
if(question){ 
    prompt("Вводи слова!")
}else{
    alert("Ну ты гад, ладно, отдыхай.")
}