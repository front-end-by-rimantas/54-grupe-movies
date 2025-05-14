export function apiLogout(req, res) {
    console.log('--------------------');

    const cookie = [
        'loginToken=5fs12af5s4',
        'domain=localhost',
        'path=/',
        'max-age=-1',
        'Same-Site=Lax',
        'Secure',
        'HttpOnly',
    ];

    return res
        .set('Set-Cookie', cookie.join('; '))
        .json({
            status: 'success',
            msg: 'Jus buvote sekmingai atjungti nuo sistemos',
        });
}