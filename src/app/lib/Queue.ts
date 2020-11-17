import Queue from 'bull';
import redisConfig from '../config/redis';

import * as jobs from '../jobs/index';

const queues = Object.values(jobs).map(job => (
    {
        bull: new Queue(job.key, redisConfig),
        name: job.key,
        handle: job.handle,
    }
));

export default {
    queues,
    add(name: string, data: Object) {
        const queue = this.queues.find(queue => queue.name === name);
        return queue?.bull.add(data);
    },
    process() {
        return this.queues.forEach(queue => {
            queue.bull.process(queue.handle);
            queue.bull.on('failed', (job, error) => {
                console.log("Error Job");
                console.log(error);
                console.log(job.data, queue.name);
            });
        })
    }
}

// import RegistrationMail from '../jobs/RegistrationMail';

// const mailQueue = new Queue(RegistrationMail.key, redisConfig); 

// mailQueue.on('failed',(job,error)=>{
//     console.log(error);
//     console.log(job.data);
// });

// export default mailQueue