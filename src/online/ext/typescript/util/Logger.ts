export class Logger {

    public static log(message: string, title?: string) {

        console.log("[LOG | " + (message ? message : "SYSTEM") + "]: " + message );

    }

}