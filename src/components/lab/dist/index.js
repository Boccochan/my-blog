"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var color_1 = require("@src/styles/color");
var Burger_1 = require("@src/components/lib/Burger");
var SideBar_1 = require("./SideBar");
var study_1 = require("./study");
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n"], ["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n"])));
var LyBurger = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  border-bottom: 1px solid ", ";\n  background-color: ", ";\n  padding: 6px 1em;\n"], ["\n  border-top: 1px solid ", ";\n  border-bottom: 1px solid ", ";\n  background-color: ", ";\n  padding: 6px 1em;\n"])), color_1.theme.colors.graySuperLight, color_1.theme.colors.graySuperLight, color_1.theme.colors.whiteSuperLight);
var LyContainer = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var LyObj = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n"])));
var SelectedComponent = function (props) {
    var select = props.select, studyList = props.studyList;
    var study = studyList.filter(function (study) { return study.key === select; });
    if (study.length === 0) {
        return react_1["default"].createElement("div", null);
    }
    else if (study.length > 1) {
        throw Error("Found some keys " + select + " " + study);
    }
    var Obj = study[0].component;
    return (react_1["default"].createElement(react_1.Suspense, { fallback: "loading.." },
        react_1["default"].createElement(LyObj, null,
            react_1["default"].createElement(Obj, null))));
};
exports["default"] = (function () {
    var _a = react_1.useState(true), showSideBar = _a[0], setShowSideBar = _a[1];
    var _b = react_1.useState(""), key = _b[0], setKey = _b[1];
    var studyList = study_1.getStudyList();
    var handleOpen = function () {
        setShowSideBar(!showSideBar);
    };
    var click = function (key) {
        setKey(key);
    };
    return (react_1["default"].createElement(Wrapper, null,
        react_1["default"].createElement(LyBurger, null,
            react_1["default"].createElement(Burger_1["default"], { isClose: showSideBar, width: 20, color: color_1.theme.colors.blueLight, openHandler: handleOpen })),
        react_1["default"].createElement(LyContainer, null,
            react_1["default"].createElement(SideBar_1["default"], { show: showSideBar, tree: studyList.map(function (study) { return study.key; }), click: click }),
            react_1["default"].createElement(SelectedComponent, { select: key, studyList: studyList }))));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
