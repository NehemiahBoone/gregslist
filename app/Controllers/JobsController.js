import jobsService from "../Services/JobsService.js"
import STORE from "../store.js"

function _drawJobs() {
  let jobs = STORE.State.jobs
  let template = ''
  jobs.forEach(j => template += j.Template)
  document.getElementById('jobs').innerHTML = template
}

export default class JobsController {
  constructor() {
    _drawJobs()
  }

  createJob() {
    event.preventDefault()
    let form = event.target
    let rawJob = {
      // @ts-ignore
      title: form.title.value,
      // @ts-ignore
      location: form.location.value,
      // @ts-ignore
      pay: parseInt(form.pay.value),
      // @ts-ignore
      img: form.img.value,
      // @ts-ignore
      description: form.description.value
    }
    jobsService.createJob(rawJob)
    _drawJobs()
  }
}