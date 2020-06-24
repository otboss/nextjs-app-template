/**
 * Diagnostic information about the current device
 * */
export abstract class Device {
    public static getScreenWidth(): number {
        return window.screen.width;
    }

    public static getClientWidth(): number {
        return window.document.documentElement.clientWidth;
    }
}