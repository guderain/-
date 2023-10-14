// 生成字母和数字
function createText() {
    const letters = []
    const numbers = [];
    /*
    获取字符 'a' 的 Unicode 编码。charCodeAt(0) 方法返回给定索引位置的字符的 Unicode 值。
    */ 
    const a = "a".charCodeAt(0);

    for(let i = 0;i<26;i++){
        // String.fromCharCode() 可接受一个指定的 Unicode 值，返回字符串。
        // 这里就是把从a-z的26个英文字母值转换成字母
        letters.push(String.fromCharCode(a+i));

        if(i < 9){
            numbers.push(i + 1);
        }
    }

    return [...letters,...numbers];
};

// 从生成的数组中随机取出一个字符
function randomText(){
    const texts = createText();
    const text = texts[Math.floor(Math.random()*texts.length)];

    return text;
};

function rainEffect(){
    const cloudEle = document.querySelector('.cloud');
    const textEle = document.createElement('div');

    textEle.innerText = randomText();
    textEle.classList.add('text');

    const left = Math.floor(Math.random()*310);
    const size = Math.random()*1.5;
    const duration = Math.random()

    const styleSheets = {
        left:`${left}px`,
        fontSize:`${size}em`,
        animationDuration:`${1+duration}s`
    }
    Object.assign(textEle.style,styleSheets);

    cloudEle.appendChild(textEle);
    // 2s后删除 模拟雨滴落地消失的效果
    setTimeout(()=>{
        cloudEle.removeChild(textEle);
    },1500)
}

// 生成雨滴
setInterval(()=>{
    rainEffect();
},20)