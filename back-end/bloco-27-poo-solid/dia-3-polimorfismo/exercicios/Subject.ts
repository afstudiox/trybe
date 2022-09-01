export default class Subject {
  constructor(private _name: string){ // porque os atributos nessa caso foram declarados diretamete no constructor ?
    this.name = _name; // por que this.name ??
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  private validateName(value: string): void {
    if (value.length < 3) throw new Error('O nome tem que possuir no mínimo 3 caracteres');
  }
}