export const IMAGES_ROOT = 'assets/img/';

export const layoutSizes = {
    resWidthCollapseSidebar: 1200,
    resWidthHideSidebar: 500
};

export const layoutPaths = {
    images: {
        root: IMAGES_ROOT
    }
};

export class colorHelper {
    static shade = (color:any, weight:any) => {
        return colorHelper.mix('#000000', color, weight);
    };

    static tint = (color:any, weight:any) => {
        return colorHelper.mix('#ffffff', color, weight);
    };

    static hexToRgbA = (hex:any, alpha:any) => {
        let c:any;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');
            if (c.length == 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
        }
        throw new Error('Bad Hex');
    };

    static mix = (color1:any, color2:any, weight:any) => {

        let d2h = (d:any) => d.toString(16);
        let h2d = (h:any) => parseInt(h, 16);

        let result = "#";
        for (let i = 1; i < 7; i += 2) {
            let color1Part = h2d(color1.substr(i, 2));
            let color2Part = h2d(color2.substr(i, 2));
            let resultPart = d2h(Math.floor(color2Part + (color1Part - color2Part) * (weight / 100.0)));
            result += ('0' + resultPart).slice(-2);
        }
        return result;
    };
}

export const isMobile = () => (/android|webos|iphone|ipad|ipod|blackberry|windows phone/).test(navigator.userAgent.toLowerCase());