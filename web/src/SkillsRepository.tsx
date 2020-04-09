export interface Skill {
  name: string
  level: 1 | 2 | 3 | 4 | 5
}


export interface SkillsRepository {
  readonly skills: Promise<Skill[]>
}
