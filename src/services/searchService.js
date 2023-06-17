import * as request from '~/utils/httpRequest';


export const search = async (q, type='less') => {
    try {
        const res = await request.get('/api/users/search', {
            params: {
                q,
                type
            }
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};