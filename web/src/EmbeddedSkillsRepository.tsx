import {Skill, SkillsRepository} from './SkillsRepository'


export class EmbeddedSkillsRepository implements SkillsRepository {
  private readonly _skills: Skill[] = [
    {name: 'HTML/CSS', level: 5},
    {name: 'JavaScript', level: 5},
    {name: 'Java', level: 5},
    {name: 'Angular', level: 4},
    {name: 'React', level: 4},
    {name: 'Git', level: 4},
    {name: 'Spring', level: 4},
    {name: 'NativeScript', level: 4},
    {name: 'UX Design', level: 3},
    {name: 'C#', level: 3},
    {name: 'Linux', level: 3},
    {name: 'Vaadin', level: 3},
    {name: 'Ionic', level: 3},
    {name: 'REST', level: 3},
    {name: 'UI Design', level: 2},
    {name: 'Node.js', level: 2},
    {name: 'Xamarin', level: 2},
    {name: 'MongoDB', level: 2},
    {name: 'SQL', level: 2},

  ]

  get skills() {
    return new Promise<Skill[]>(resolve => resolve(this._skills))
  }
}
