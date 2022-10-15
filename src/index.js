import './style.css';
import mainPage from "./mainPage";
import contactPage from './contactPage';
import menuPage from "./menuPage";

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
    const nav = createPage(mainDiv, "div", "nav");
    const button1 = createPage(nav.ele, "button", "nav-button");
    const button2 = createPage(nav.ele, "button", "nav-button");
    const button3 = createPage(nav.ele, "button", "nav-button");
    button1.changeText("Home");

    button2.changeText("Menu");

    button3.changeText("Contact");

    const container = createPage(mainDiv, "div", "container");
    const footer = createPage(mainDiv, "div", "footer");
    const mainContainer = createPage(container.ele, "div", "main");

    header.changeText("LA's Best Steak");
    footer.changeText("Copyright © 2022 jyu-1");

    mainPage(mainContainer);
    button1.ele.classList.add("current-nav");

    button1.ele.addEventListener("click", () => {
        button1.ele.classList.add("current-nav");
        button2.ele.classList.remove("current-nav");
        button3.ele.classList.remove("current-nav");
        mainContainer.ele.innerText = "";
        mainPage(mainContainer);
    })

    button2.ele.addEventListener("click", () => {
        button1.ele.classList.remove("current-nav");
        button2.ele.classList.add("current-nav");
        button3.ele.classList.remove("current-nav");
        mainContainer.ele.innerText = "";
        menuPage(mainContainer);
    })

    button3.ele.addEventListener("click", () => {
        button1.ele.classList.remove("current-nav");
        button2.ele.classList.remove("current-nav");
        button3.ele.classList.add("current-nav");
        mainContainer.ele.innerText = "";
        contactPage(mainContainer);
    })
})();

