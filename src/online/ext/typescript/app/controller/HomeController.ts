import { Controller } from "./../../core/Controller.js";
import { DataEntity, Config } from "./../../conf/Config.js";
import { Logger } from "./../../util/Logger.js";

export class HomeController extends Controller {

    private _elements: Array<HTMLElement>;
    private _messages;
    private _headerData;
    private _videoGalleryData;
    private _photoGalleryData;
    private _aboutData;

    constructor() {

        super();
        this._initElements();
        this._getData();
        this._buildMessages();
        this._buildHeaderContent();
        this._buildAboutContent();
        this._buildVideoGalleryContent();
        this._buildPhotoGalleryContent();
        
    }


    private _getData(): void {

        this._headerData        = fetch(Config.CONTENT_FILES_PATH.get(DataEntity._HEADER_));
        this._aboutData         = fetch(Config.CONTENT_FILES_PATH.get(DataEntity._ABOUT_));
        this._videoGalleryData  = fetch(Config.CONTENT_FILES_PATH.get(DataEntity._VIDEO_GALLERY_));
        this._photoGalleryData  = fetch(Config.CONTENT_FILES_PATH.get(DataEntity._PHOTO_GALLERY_));
        this._messages          = fetch(Config.MESSAGES_PATH);

    }

    private _initElements(): void {

        this._elements = new Array<HTMLElement>();
    }

    private _buildMessages(): void {

        this._messages
            
            .then(response => response.json())

            .then(data => {

            })

            .catch(error => Logger.log(error));

    }

    private _buildHeaderContent(): void {

        this._headerData

            .then(response => response.json())

            .then(data => {

                data['header'].forEach(content => {
                    
                    let element: HTMLElement = document.querySelector('#' + content['id']);

                    if (content['text']) {

                        element.textContent = content['text'];

                    }

                });

            })

            .catch(error => Logger.log(error));

    }

    private _buildAboutContent(): void {

        this._aboutData

            .then(response => response.json())

            .then(data => {

            })

            .catch(error => Logger.log(error));

    }

    private _buildPhotoGalleryContent(): void {

        this._photoGalleryData

            .then(response => response.json())

            .then(data => {

            })

            .catch(error => Logger.log(error));

    }

    private _buildVideoGalleryContent(): void {

        this._videoGalleryData

            .then(response => response.json())

            .then(data => {

            })

            .catch(error => Logger.log(error));

    }

    
}