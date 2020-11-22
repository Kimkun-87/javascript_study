document.write("<h1>컴퓨터와 묵 찌 빠</h1>");

var game = prompt("묵 찌 빠 중 입력하세요", "ex) 묵");
var gameNum;

switch(game){
    case "찌":
        gameNum = 1; break;

    case "빠":
        gameNum = 2; break;

    case "묵":
        gameNum = 3; break;

    default:alert("잘못 입력했습니다.")
    location.reload(); //새로고침 버튼처럼 현재 리소스를 다시 불러옵니다.

}

var com = Math.ceil(Math.random() *3 ); //0~3사이의 난수를 정함.

document.write("<img src=\"images/math_" + com + ".png\">");

if(gameNum == com){
    document.write("<img src=\"images/game_1.png\">");
}else{
    document.write("<img src=\"images/game_2.png\">");
}