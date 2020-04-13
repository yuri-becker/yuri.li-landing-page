import {Skill, SkillsRepository} from './SkillsRepository'


export class EmbeddedSkillsRepository implements SkillsRepository {
  private readonly _skills: Skill[] = [
    {name: 'HTML/CSS', level: 5},
    {name: 'JavaScript', level: 5},
    {name: 'Java', level: 5},
    {name: 'Angular', level: 4},
    {name: 'React', level: 4},
    {name: 'Spring', level: 4},
  ]

  get skills() {
    return new Promise<Skill[]>(resolve => resolve(this._skills))
  }
}
