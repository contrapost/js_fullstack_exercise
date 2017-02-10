/**
 * Created by alexandershipunov on 10/02/2017.
 */

const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development'

export default {
    port: env.PORT || 8080
};

export const logStars = function (message) {
    console.info('***********');
    console.info(message);
    console.info('***********');
};