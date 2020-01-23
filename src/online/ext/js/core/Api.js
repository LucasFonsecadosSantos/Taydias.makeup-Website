import { HomeController } from "./../app/controller/HomeController.js";
import { NavbarController } from "./../app/controller/NavbarController.js";
import { FooterController } from "./../app/controller/FooterController.js";
export class Api {
    constructor() {
        this._init();
    }
    _init() {
        new NavbarController();
        new FooterController();
        new HomeController();
    }
}
//# sourceMappingURL=Api.js.map