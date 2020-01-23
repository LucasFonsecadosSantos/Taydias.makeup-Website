import { Controller } from "./../../core/Controller.js";
import { Config } from "./../../conf/Config.js";
import { Logger } from "./../../util/Logger.js";
export class NavbarController extends Controller {
    constructor() {
        super();
        this._initElements();
        this._getData();
        this._buildMessages();
    }
    _initElements() {
        this._elements = new Array();
        this._elements['nav-link-home'] = document.querySelector('#nav-link-home');
        this._elements['nav-link-works'] = document.querySelector('#nav-link-works');
        this._elements['nav-link-schedule'] = document.querySelector('#nav-link-schedule');
        this._elements['nav-link-history'] = document.querySelector('#nav-link-history');
        this._elements['nav-link-contact'] = document.querySelector('#nav-link-contact');
    }
    _getData() {
        this._messages = fetch(Config.MESSAGES_PATH);
    }
    _buildMessages() {
        this._messages
            .then(response => response.json())
            .then(data => {
            data['navbar'].forEach(message => {
                let element = document.querySelector(data['id']);
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
//# sourceMappingURL=NavbarController.js.map