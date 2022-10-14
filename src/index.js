import './style.css';

const mainDiv = document.querySelector("#content");

const createPage = (targetDiv, type, className) => {
    const div = document.createElement(type);
    targetDiv.appendChild(div).classList.add(className);
    const changeText = (string) => {
        div.innerText = string;
    }
    return { changeText, div };
};

const mainLayout = (() => {
    const header = createPage(mainDiv, "div", "header");
    const container = createPage(mainDiv, "div", "container");
    const footer = createPage(mainDiv, "div", "footer");

    header.changeText("LA's Best Steak");
    footer.changeText("Copyright © 2022 jyu-1");

    const main = createPage(container.div, "div", "main");

    const item1 = createPage(main.div, "div", "item1");
    item1.changeText("Best steak in town since 1702");

    const item2 = createPage(main.div, "div", "item2");
    item2.changeText("Order online or call to make a reservation");

    const item3 = createPage(main.div, "div", "item3");
    item3.changeText("Business Hours:");

    const item31 = createPage(item3.div, "p", "item31");
    item31.changeText("Sunday: 10am-11pm");
    const item32 = createPage(item3.div, "p", "item32");
    item32.changeText("Monday: 11am-8pm");
    const item33 = createPage(item3.div, "p", "item33");
    item33.changeText("Tuesday: 11am-8pm");
    const item34 = createPage(item3.div, "p", "item34");
    item34.changeText("Wednesday: 11am-8pm");
    const item35 = createPage(item3.div, "p", "item35");
    item35.changeText("Thursday: 11am-8pm");
    const item36 = createPage(item3.div, "p", "item36");
    item36.changeText("Friday: 10am-11pm");
    const item37 = createPage(item3.div, "p", "item37");
    item37.changeText("Saturday: 10am-11pm");

    const item4 = createPage(main.div, "div", "item4");
    item4.changeText("Address: ");
    const item41 = createPage(item4.div, "p", "item41");
    item41.changeText("123 Odin Drive, Los Angeles, CA, 90071")

})();



