import dotenv from 'dotenv'
dotenv.config();

const config = {
    EMAIL: process.env.EMAIL,
    PASS: process.env.PASS
  };

export default config