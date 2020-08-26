import Job from "../Models/Job.js"
import STORE from "../store.js"


class JobsService {
  createJob(rawJob) {
    let job = new Job(rawJob)
    STORE.State.jobs.push(job)
  }
}


const SERVICE = new JobsService()
export default SERVICE