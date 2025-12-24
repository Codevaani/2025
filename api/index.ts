import type { VercelRequest, VercelResponse } from '@vercel/node';
import desktopHandler from './desktop';
import mobileHandler from './mobile';

export default function handler(req: VercelRequest, res: VercelResponse) {
    const ua = req.headers['user-agent'] || '';
    const isMobile = /mobile|android|iphone|ipad|phone/i.test(ua);

    if (isMobile) {
        return mobileHandler(req, res);
    } else {
        return desktopHandler(req, res);
    }
}
