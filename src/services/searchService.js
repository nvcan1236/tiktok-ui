import * as request from '~/utils/httpRequest';


export const search = async (q) => {
    try {
        const res = await request.get('/users', {
            params: {
                q
            }
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};