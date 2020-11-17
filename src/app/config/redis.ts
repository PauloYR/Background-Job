import Queue from 'bull';

const redisConfig: Queue.QueueOptions = {
    redis: {
        port: parseInt(process.env.REDIS_PORT || ''),
        host: process.env.REDIS_HOST,
    }
}

export default redisConfig;