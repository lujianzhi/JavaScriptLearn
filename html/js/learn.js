function showPic(whichPic) {
    //获取传入标签的href属性值
    var aimUrl = whichPic.getAttribute("href");
    //获取指定id的标签(占位img)
    var aimImg = document.getElementById("placeholder");
    //设置标签的src属性
    aimImg.setAttribute("src", aimUrl);

    //获取图片的title属性
    var aimText = whichPic.getAttribute("title");
    //获取指定id的<p>标签
    var aimP = document.getElementById("description");
    //弹出<p>标签的文本
    // alert(aimP.firstChild.nodeValue);
    //设置<p>标签文本
    aimP.firstChild.nodeValue = aimText;
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    alert("body_element.childNodes.length : " + body_element.childNodes.length);
    alert("body_element.nodeType : " + body_element.nodeType);
}

function showAlert() {
    alert("呀呀呀");
}

function returnValue() {
    return "returnValue()的返回值";
}

function callAndroid() {
    ian.jsMethod("啦啦啦我是content");
}

function callAndroid2() {
    document.location = "ian://function?name=lujianzhi&age=25";
}

function displayPerson(name, age) {
    var p = document.getElementById("display_person");
    p.firstChild.nodeValue = "name : " + name + " ; age : " + age;
}

//在页面加载时调用countBodyChildren方法
// window.onload = countBodyChildren;