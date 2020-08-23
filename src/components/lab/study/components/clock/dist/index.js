"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var worldmap_64597093_jpg_1 = require("@static/worldmap-64597093.jpg");
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  // width: 100%;\n  // height: auto;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  // width: 100%;\n  // height: auto;\n"])));
var WorldMapImg = styled_components_1["default"].img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  // position: absolute;\n  // top: 0;\n  // left: 0;\n  z-index: 0;\n  // opacity: 0;\n  margin: 0;\n  padding: 0;\n  min-width: 1000px;\n  height: 500px;\n"], ["\n  // position: absolute;\n  // top: 0;\n  // left: 0;\n  z-index: 0;\n  // opacity: 0;\n  margin: 0;\n  padding: 0;\n  min-width: 1000px;\n  height: 500px;\n"])));
var ParentImgBox = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  background-color: red;\n  border: 1px solid green;\n  padding: 0;\n"], ["\n  position: relative;\n  background-color: red;\n  border: 1px solid green;\n  padding: 0;\n"])));
var WorldMapNightImg = styled_components_1["default"].img(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 200px;\n  height: 100%;\n  object-fit: cover;\n  object-position: 80% 100%;\n"], ["\n  width: 200px;\n  height: 100%;\n  object-fit: cover;\n  object-position: 80% 100%;\n"])));
var WorldMapNightBox = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  width: 200px;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  bacground-color: black;\n  border: 1px solid black;\n  top: -1px;\n  right: 17%;\n"], ["\n  position: absolute;\n  width: 200px;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  bacground-color: black;\n  border: 1px solid black;\n  top: -1px;\n  right: 17%;\n"])));
exports["default"] = (function () {
    return (react_1["default"].createElement(Container, null,
        react_1["default"].createElement(WorldMapImg, { src: worldmap_64597093_jpg_1["default"], alt: "World map" })));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
