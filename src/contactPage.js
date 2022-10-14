import { createPage } from "./index.js"
import RAT from "./rat.jpeg";
import MANAGER from "./manager.jpg";
import WAITRESS from "./waitress.jpg";

export default function contactPage(main) {
    const item1 = createPage(main.ele, "div", "main-title");
    item1.changeText("Contact Us");

    const item2 = createPage(main.ele, "div", "contact-div");
    item2.changeText("Head Chef");

    const ratPic = createPage(item2.ele, "img", "rat-pic");
    ratPic.ele.src = RAT;

    const item21 = createPage(item2.ele, "p", "item21");
    item21.changeText("Ratta");

    const item22 = createPage(item2.ele, "p", "item22");
    item22.changeText("(626) 111 - 2222");

    const item3 = createPage(main.ele, "div", "contact-div");
    item3.changeText("Manager");

    const managerPic = createPage(item3.ele, "img", "manager-pic");
    managerPic.ele.src = MANAGER;

    const item31 = createPage(item3.ele, "p", "item31");
    item31.changeText("Liny");

    const item32 = createPage(item3.ele, "p", "item32");
    item32.changeText("(626) 111 - 3333");

    const item4 = createPage(main.ele, "div", "contact-div");
    item4.changeText("Waitress");

    const waitressPic = createPage(item4.ele, "img", "waitress-pic");
    waitressPic.ele.src = WAITRESS;

    const item41 = createPage(item4.ele, "p", "item41");
    item41.changeText("Colly");

    const item42 = createPage(item4.ele, "p", "item42");
    item42.changeText("(626) 111 - 4444");
}