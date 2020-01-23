import { Controller } from "./../../core/Controller.js";
import { DataEntity, Config } from "./../../conf/Config.js";
import { Logger } from "./../../util/Logger.js";

export class NavbarController extends Controller {

    private _elements: Array<HTMLElement>;
    private _messages;
    private _navbarData;

    constructor() {

        super();
        this._initElements();
        this._getData();
        this._buildMessages();

    }

    private _initElements(): void {

        this._elements = new Array<HTMLElement>();

        this._elements['nav-link-home']         = document.querySelector('#nav-link-home');
        this._elements['nav-link-works']        = document.querySelector('#nav-link-works');
        this._elements['nav-link-schedule']     = document.querySelector('#nav-link-schedule');
        this._elements['nav-link-history']      = document.querySelector('#nav-link-history');
        this._elements['nav-link-contact']      = document.querySelector('#nav-link-contact');

    }

    private _getData(): void {

        this._messages = fetch(Config.MESSAGES_PATH);

    }

    private _buildMessages(): void {

        this._messages

            .then(response => response.json())

            .then(data => {

                data['navbar'].forEach(message => {

                    let element: HTMLElement = document.querySelector(data['id']);

                    if (data['text']) {

                        element.textContent = data['text'];

                    }

                    if (data['alt']) {

                        element.setAttribute('alt', data['alt']);

                    }

                    if (data['route']) {

                        element.setAttribute('href', data['route']);

                    }

                    if (data['title']) {

                        element.setAttribute('title', data['title']);

                    }

                });

            })

            .catch(error => Logger.log(error));

    }

}