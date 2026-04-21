import dotenv from 'dotenv';
dotenv.config();

const config = () => {
    return {
        port: process.env.PORT || 3000
    };
};

export default config;