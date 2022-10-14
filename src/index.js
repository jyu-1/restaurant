import './style.css';

const mainDiv = document.querySelector("#content");

const createDiv = (targetDiv, className) => {
    const div = document.createElement("div");
    targetDiv.appendChild(div).classList.add(className);
    const changeText = (string) => {
        div.innerText = string;
    }
    return { changeText, div };
};

const mainLayout = (() => {
    const header = createDiv(mainDiv, "header");
    const container = createDiv(mainDiv, "container");
    const footer = createDiv(mainDiv, "footer");

    header.changeText("LA's Best Steak");
    footer.changeText("Made by: github.com/jyu-1");

    const item1 = createDiv(container.div, "item1");
    item1.changeText("test");
})();



