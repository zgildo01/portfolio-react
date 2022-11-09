import { projects } from '../data/projects.js'
import { hyphenator } from './hypenateWords.js'

function findProject(str){
  let project = projects.filter(project => hyphenator(project.title) === str)
  return project
}