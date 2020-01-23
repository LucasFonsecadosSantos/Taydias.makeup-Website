import { Controller } from "./../../core/Controller.js";
import { DataEntity, Config } from "./../../conf/Config.js";
import { Logger } from "./../../util/Logger.js";
export class HomeController extends Controller {
    constructor() {
        super();
        this._initElements();
        this._getData();
        this._buildMessages();
        this._buildAboutContent();
        this._buildVideoGalleryContent();
        this._buildPhotoGalleryContent();
    }
    _getData() {
        this._aboutData = fetch(Config.CONTENT_FILES_PATH.get(DataEntity._ABOUT_));
        this._videoGalleryData = fetch(Config.CONTENT_FILES_PATH.get(DataEntity._VIDEO_GALLERY_));
        this._photoGalleryData = fetch(Config.CONTENT_FILES_PATH.get(DataEntity._PHOTO_GALLERY_));
        this._messages = fetch(Config.MESSAGES_PATH);
    }
    _initElements() {
        this._elements = new Array();
    }
    _buildMessages() {
        this._messages
            .then(response => response.json())
            .then(data => {
        })
            .catch(error => Logger.log(error));
    }
    _buildAboutContent() {
        this._aboutData
            .then(response => response.json())
            .then(data => {
        })
            .catch(error => Logger.log(error));
    }
    _buildPhotoGalleryContent() {
        this._photoGalleryData
            .then(response => response.json())
            .then(data => {
        })
            .catch(error => Logger.log(error));
    }
    _buildVideoGalleryContent() {
        this._videoGalleryData
            .then(response => response.json())
            .then(data => {
        })
            .catch(error => Logger.log(error));
    }
}
//# sourceMappingURL=HomeController.js.map