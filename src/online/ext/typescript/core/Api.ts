import { HomeController }   from "./../app/controller/HomeController.js";
import { NavbarController } from "./../app/controller/NavbarController.js";
import { FooterController } from "./../app/controller/FooterController.js";

export class Api {

    constructor() {

        this._init();

    }

    private _init(): void {

        new NavbarController();
        new FooterController();
        new HomeController();

    }

}