import { createPage } from "./index.js"
import WAGYU from "./wagyu.jpg";
import TBONE from "./tbone.jpg";
import RIBEYE from "./ribeye.jpg";
import FLANK from "./flank.jpg";
import MIGNON from "./mignon.jpg";
import SKIRT from "./skirt.jpg";
import CHUCKEYE from "./chuckeye.jpg";
import SIRLOIN from "./sirloin.jpeg";

export default function menuPage(main) {
    const item1 = createPage(main.ele, "div", "main-title");
    item1.changeText("Menu");

    const item2 = createPage(main.ele, "div", "contact-div");
    item2.changeText("Wagyu");
    const wagyuPic = createPage(item2.ele, "img", "menu-pic");
    wagyuPic.ele.src = WAGYU;
    const item21 = createPage(item2.ele, "p", "item21");
    item21.changeText("$90");

    const item3 = createPage(main.ele, "div", "contact-div");
    item3.changeText("T-Bone");
    const tbonePic = createPage(item3.ele, "img", "menu-pic");
    tbonePic.ele.src = TBONE;
    const item31 = createPage(item3.ele, "p", "item31");
    item31.changeText("$50");

    const item4 = createPage(main.ele, "div", "contact-div");
    item4.changeText("Ribeye");
    const ribeyePic = createPage(item4.ele, "img", "menu-pic");
    ribeyePic.ele.src = RIBEYE;
    const item41 = createPage(item4.ele, "p", "item41");
    item41.changeText("$50");

    const item5 = createPage(main.ele, "div", "contact-div");
    item5.changeText("Flank");
    const flankPic = createPage(item5.ele, "img", "menu-pic");
    flankPic.ele.src = FLANK;
    const item51 = createPage(item5.ele, "p", "item51");
    item51.changeText("$40");

    const item6 = createPage(main.ele, "div", "contact-div");
    item6.changeText("Filet Mignon");
    const mignonPic = createPage(item6.ele, "img", "menu-pic");
    mignonPic.ele.src = MIGNON;
    const item61 = createPage(item6.ele, "p", "item61");
    item61.changeText("$60");

    const item7 = createPage(main.ele, "div", "contact-div");
    item7.changeText("Skirt");
    const skirtPic = createPage(item7.ele, "img", "menu-pic");
    skirtPic.ele.src = SKIRT;
    const item71 = createPage(item7.ele, "p", "item71");
    item71.changeText("$30");

    const item8 = createPage(main.ele, "div", "contact-div");
    item8.changeText("Chuckeye");
    const chuckeyePic = createPage(item8.ele, "img", "menu-pic");
    chuckeyePic.ele.src = CHUCKEYE;
    const item81 = createPage(item8.ele, "p", "item81");
    item81.changeText("$50");

    const item9 = createPage(main.ele, "div", "contact-div");
    item9.changeText("Sirloin");
    const sirloinPic = createPage(item9.ele, "img", "menu-pic");
    sirloinPic.ele.src = SIRLOIN;
    const item91 = createPage(item9.ele, "p", "item91");
    item91.changeText("$60");
}