import React from "react";
import { Image } from 'antd';
import $ from 'jquery' ;

function Picture(){


const pingIcon = require( './Ping');

function handleClick(e) {
// eslint-disable-next-line no-restricted-globals
var xPage = (navigator.appName == 'Netscape') ? e.pageX : event.x + document.body.scrollLeft;
// eslint-disable-next-line no-restricted-globals
var yPage = (navigator.appName == 'Netscape') ? e.pageY : event.y + document.body.scrollTop;
let imgEl = document.getElementById("imageId");
let img_x = locationLeft(imgEl);
let img_y = locationTop(imgEl);
var xPos = xPage - img_x;
var yPos = yPage - img_y;
// 当前点击位置
var hotspot = {x: xPos, y: yPos};
addHotspot(hotspot);
}
// 找到元素的屏幕位置
function locationLeft(element) {
    var offsetTotal = element.offsetLeft;
    var scrollTotal = 0; // element.scrollLeft but we dont want to deal with scrolling - already in page coords
    if (element.tagName != "BODY") {
        if (element.offsetParent != null)
        return offsetTotal + scrollTotal + locationLeft(element.offsetParent);
    }
    return offsetTotal + scrollTotal;
}

// 找到元素的屏幕位置
function locationTop(element) {
var offsetTotal = element.offsetTop;
var scrollTotal = 0; // element.scrollTop but we dont want to deal with scrolling - already in page coords
if (element.tagName != "BODY") {
    if (element.offsetParent != null)
    return offsetTotal + scrollTotal + locationTop(element.offsetParent);
}
return offsetTotal + scrollTotal;
}
// 添加自定义内容
function addHotspot(hotspot) {
    var x = hotspot.x - 10;
    var y = hotspot.y + 35;
    var width = 30;
    var height = 30;
    var src = pingIcon;
    let imgEle = '<img ' + ' src="' + src + '"  style="top: '
    + y + 'px; left: ' + x + 'px; width: ' + width + 'px; height: ' + height + 'px;  position: absolute; cursor: pointer;"'
    + ')" />';
    $('.container').append(imgEle);
  }

  return (
    <div id="imageId" style={{ width:'100%'}} onClick={handleClick}>
        <img alt="map" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" style={{width:'100%'}}/>
    </div>
  )
}
  

export default Picture;