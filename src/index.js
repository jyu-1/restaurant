import './style.css';
import { mainPage } from "./mainPage";
import { contactPage } from './contactPage';

const mainDiv = document.querySelector("#content");

export const createPage = (targetEle, type, className) => {
    const ele = document.createElement(type);
    targetEle.appendChild(ele).classList.add(className);
    const changeText = (string) => {
        ele.innerText = string;
    }
    return { changeText, ele };
};

const mainLayout = (() => {
    const header = createPage(mainDiv, "div", "header");
    const container = createPage(mainDiv, "div", "container");
    const footer = createPage(mainDiv, "div", "footer");
    const mainContainer = createPage(container.ele, "div", "main");

    header.changeText("LA's Best Steak");
    footer.changeText("Copyright © 2022 jyu-1");

    mainPage(mainContainer);
    //contactPage(mainContainer);
})();
