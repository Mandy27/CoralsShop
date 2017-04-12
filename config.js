const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';


export const logStars = function(message) {
  console.info('**********');
  console.info(message);
  console.info('**********');
};

export default {
  mongodbUri: 'mongodb://coralsAdmin:abcd1234@ds159180.mlab.com:59180/coralsdb',
  port: env.PORT || 8080,
  host: env.HOST || '0.0.0.0',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  }
};