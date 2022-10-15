import { createPage } from "./index.js"
import CHEFIMAGE from "./chef.jpg";

export default function mainPage(main) {
    const item1 = createPage(main.ele, "div", "main-title");
    item1.changeText("Best Steak in Town Since 1702");

    const chefPic = createPage(main.ele, "img", "chef-pic");
    chefPic.ele.src = CHEFIMAGE;

    const item2 = createPage(main.ele, "div", "item2");
    item2.changeText("Order online or call to make a reservation");

    const item3 = createPage(main.ele, "div", "item3");
    item3.changeText("Business Hours:");

    const item31 = createPage(item3.ele, "p", "item31");
    item31.changeText("Sunday: 10am-11pm");
    const item32 = createPage(item3.ele, "p", "item32");
    item32.changeText("Monday: 11am-8pm");
    const item33 = createPage(item3.ele, "p", "item33");
    item33.changeText("Tuesday: 11am-8pm");
    const item34 = createPage(item3.ele, "p", "item34");
    item34.changeText("Wednesday: 11am-8pm");
    const item35 = createPage(item3.ele, "p", "item35");
    item35.changeText("Thursday: 11am-8pm");
    const item36 = createPage(item3.ele, "p", "item36");
    item36.changeText("Friday: 10am-11pm");
    const item37 = createPage(item3.ele, "p", "item37");
    item37.changeText("Saturday: 10am-11pm");

    const item4 = createPage(main.ele, "div", "item4");
    item4.changeText("Address: ");
    const item41 = createPage(item4.ele, "p", "item41");
    item41.changeText("123 Odin Drive, Los Angeles, CA, 90071")
}
