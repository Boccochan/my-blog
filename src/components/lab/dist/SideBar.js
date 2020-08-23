"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var custom_media_1 = require("@src/styles/custom-media");
var color_1 = require("@src/styles/color");
var Tree_1 = require("./Tree");
var parse_1 = require("@src/lib/parse");
var Bar = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  height: 100vh;\n  width: 20%;\n  border-right: 1px solid ", ";\n  transition: transform 0.5s ease;\n  z-index: 1000;\n  background-color: ", ";\n  ", "\n\n  ", "\n"], ["\n  position: relative;\n  height: 100vh;\n  width: 20%;\n  border-right: 1px solid ", ";\n  transition: transform 0.5s ease;\n  z-index: 1000;\n  background-color: ", ";\n  ",
    "\n\n  ",
    "\n"])), color_1.theme.colors.graySuperLight, color_1.theme.colors.whiteSuperLight, custom_media_1.myMedia.lessThan("ipadpro")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 90%;\n  "], ["\n    width: 90%;\n  "]))), function (props) {
    return !props.show && styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      display: none;\n    "], ["\n      display: none;\n    "])));
});
var LyTree = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  top: 1%;\n  left: 5%;\n"], ["\n  position: relative;\n  top: 1%;\n  left: 5%;\n"])));
exports["default"] = (function (props) {
    var click = function (key) {
        props.click(key);
    };
    var treeData = parse_1.parseLabTree(props.tree);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Bar, { show: props.show },
            react_1["default"].createElement(LyTree, null,
                react_1["default"].createElement(Tree_1["default"], { data: treeData, callback: click })))));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
