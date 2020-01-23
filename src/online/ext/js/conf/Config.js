export var DataEntity;
(function (DataEntity) {
    DataEntity["_ABOUT_"] = "about";
    DataEntity["_PHOTO_GALLERY_"] = "photo_gallery";
    DataEntity["_VIDEO_GALLERY_"] = "video_gallery";
})(DataEntity || (DataEntity = {}));
export class Config {
}
Config.CONTENT_PATH = "/data/general/";
Config.CONFIG_PATH = "/data/config/";
Config.PHOTO_GALLERY_PATH = "/data/photo_gallery/";
Config.VIDEO_GALLERY_PATH = "/data/video_gallery/";
Config.MESSAGES_PATH = "/data/config/messages.json";
Config.SYSTEM_PATH = "/data/config/system.json";
Config.CONTENT_FILES_PATH = new Map([
    [DataEntity._ABOUT_, Config.CONTENT_PATH + "about.json"]
]);
//# sourceMappingURL=Config.js.map