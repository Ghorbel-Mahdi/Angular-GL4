export class Personne {
  id: number;
  name: string;
  firstname: string;
  age: number;
  path: string;
  cin: number;
  job: string;
  constructor(
    id = 0,
    name = '',
    firstname = '',
    age = 0,
    cin = 0,
    path = '',
    job = ''
  ) {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.age = age;
    this.cin = cin;
    this.path = path;
    this.job = job;
  }
}
