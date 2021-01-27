var ball = document.getElementById("ball");

ball.style.position = "absolute";//ここは、ポジションをアブソリュートにしてるってことよね？

ball.ondragstart = (event) => {
    return false;
    //ここの処理、よくわからん
    //恐らく、ドラッグが始まった時、何もしないよ
    //っ処理なのかもしれないです
}


ball.onmousedown = function (event) {
    document.addEventListener("mousemove", onMouseMove);
}
var onMouseMove = function (event) {
    var x = event.clientX;//イベントが起きたときのX座標を参照
    console.log(x);
    //var y = event.clientY;
    //var width = ball.offsetWidth;
    //var height = ball.offsetHeight;
   // ball.style.top = (y - height / 2) + "px";
    //ball.style.left = (x - width / 2) + "px";
}
console.log('チェックログ');//デバック用のチェックログ