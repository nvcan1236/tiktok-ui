import * as request from '~/utils/httpRequest';

export const get = async (q, type='for-you', page=1) => {
    try {
        const res = await request.get('api/videos', {
            params: {
                q,
                type,
                page
            }
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};