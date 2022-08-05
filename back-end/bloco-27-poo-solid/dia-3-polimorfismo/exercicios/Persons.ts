export default class Person {
  constructor (
    private _name: string, 
    private _birthDate: Date){
      this.name = _name, 
      this.birthDate = _birthDate}
  
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  get birthDate():Date {
    return this._birthDate;
  }

  set birthDate(value: Date){
    this.validateBirthDate(value);
    this._birthDate = value;
  }

  static getAge(value: Date):number {
    const diff = Math.abs(new Date().getTime() - value.getTime()); 
    const yearsMS = 31_560_000_000;// 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearsMS);
  }

  private validateName(value: string): void {
    if (value.length < 3) 
    throw new Error('O nome deve conter no mínimo 3 caracteres.');
  }

  private validateBirthDate(value: Date): void {
    if (value.getTime() > new Date().getTime()) 
    throw new Error('A data de nascimento não pode ser uma data no futuro.')
    if (Person.getAge(value) > 120)
    throw new Error('A pessoa deve ter no máximo 120 anos.')
  }
}




