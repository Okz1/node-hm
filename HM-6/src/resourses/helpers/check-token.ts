import { verify } from "jsonwebtoken";

export function checkToken(req: any, res: any, next: any) {
    const token = req.headers['x-access-token'];
    if (token) {
        verify(token, 'secretKey', (err: any) => {
            if (err) {
                res.status(403).send({
                    success: false,
                    message: 'Failed to authenticate bad toke.'
                })
            } else {
                next();
            }
        });
    } else {
        res.status(401).send({
            success: false,
            message: 'No token provided.'
        })
    }
}
