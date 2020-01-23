export enum DataEntity {

    _ABOUT_         = "about",
    _PHOTO_GALLERY_ = "photo_gallery",
    _VIDEO_GALLERY_ = "video_gallery"
}

export class Config {

    public static readonly DATA_ENTITY:         DataEntity;
    public static readonly CONTENT_PATH:        string = "/data/general/";
    public static readonly CONFIG_PATH:         string = "/data/config/";
    public static readonly PHOTO_GALLERY_PATH:  string = "/data/photo_gallery/";
    public static readonly VIDEO_GALLERY_PATH:  string = "/data/video_gallery/";
    public static readonly MESSAGES_PATH:       string = "/data/config/messages.json";
    public static readonly SYSTEM_PATH:         string = "/data/config/system.json";

    public static readonly CONTENT_FILES_PATH:  Map<DataEntity,string> = new Map([

        [DataEntity._ABOUT_, Config.CONTENT_PATH + "about.json"]

    ]);

}