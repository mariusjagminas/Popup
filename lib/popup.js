"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Popup = function Popup() {
  var _this = this;

  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, Popup);

  _defineProperty(this, "init", function () {
    _this.body = document.querySelector("body");
    _this.links = _this.body.querySelectorAll(_this.config.selector);

    _this.links.forEach(function (link) {
      return link.addEventListener("click", _this.handleClick);
    });
  });

  _defineProperty(this, "stop", function () {
    _this.links.forEach(function (link) {
      return link.removeEventListener("click", _this.handleClick);
    });
  });

  _defineProperty(this, "handleClick", function (e) {
    e.preventDefault();
    e.stopPropagation();

    var _this$getElementCoord = _this.getElementCoords(e.target),
        x = _this$getElementCoord.x,
        y = _this$getElementCoord.y,
        position = _this$getElementCoord.position;

    _this.addPopupToDom(x, y, position);
  });

  _defineProperty(this, "getElementCoords", function (element) {
    var coords = element.getBoundingClientRect();

    var isfixed = _this.isFixed(element);

    return {
      x: coords.left + (isfixed ? 0 : window.scrollX) + coords.width / 2 - 30,
      y: coords.top + (isfixed ? 0 : window.scrollY) + coords.height / 2 + 10,
      position: isfixed ? "fixed" : "absolute"
    };
  });

  _defineProperty(this, "isFixed", function (elem) {
    do {
      if (getComputedStyle(elem).position == "fixed") return true;
    } while (elem = elem.offsetParent);

    return false;
  });

  _defineProperty(this, "addPopupToDom", function (x, y, position) {
    var p = document.createElement("p");
    var div = document.createElement("div");
    var div2 = document.createElement("div");
    p.style.cssText = "\n      background: ".concat(_this.config.background, "; \n      color: ").concat(_this.config.color, ";\n      position: ").concat(position, ";\n      padding: 20px; \n      top: ").concat(y, "px;\n      left: ").concat(x, "px;\n      border-radius: 10px;\n      box-shadow: 0px 0px 10px rgba(0,0,0,0.5);\n      z-index: 7;\n      opacity: 0; \n      transition: 700ms\n      ");
    p.innerText = _this.config.text;
    div.style.cssText = "\n      position: absolute;\n      top: -10px;\n      left: 20px;\n      transform: rotateZ(45deg);\n      width: 20px;\n      height: 20px;\n      background: ".concat(_this.config.background, ";\n      box-shadow: 0px 0px 10px rgba(0,0,0,0.5);\n    ");
    div2.style.cssText = "\n      position: absolute;\n      top: 0;\n      left: 10px;\n      width: 40px;\n      height: 20px;\n      background: ".concat(_this.config.background, ";\n    ");
    p.appendChild(div);
    p.appendChild(div2);

    _this.body.appendChild(p);

    setTimeout(function () {
      p.style.opacity = "1";
    }, 10);

    _this.removePopupFromDom(p, _this.config.displayTime);
  });

  _defineProperty(this, "removePopupFromDom", function (p, time) {
    setTimeout(function () {
      p.style.opacity = "0";
    }, time);
    setTimeout(function () {
      _this.body.removeChild(p);
    }, time + 1000);
  });

  this.config = {
    text: params.text || "Link is inactive. This is a demo website",
    color: params.color || "#000000",
    background: params.background || "#ffffff",
    displayTime: params.displayTime || 2500,
    selector: params.selector || 'a[href="#"]'
  };
  this.body = null;
  this.links = null;
};