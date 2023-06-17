import * as request from '~/utils/httpRequest';


export const search = async (page=1, per_page=12) => {
    try {
        const res = await request.get('/api/users/suggested', {
            params: {
                page, 
                per_page
            }
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};