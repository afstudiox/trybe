type User = { email: string}
type Sale = { totalValue: number}

interface Get<T> {
  getOne(id:number): Promise<T>
}

// Declarando a classe
class SaleService implements Get<Sale> {
	async getOne(id: number): Promise<Sale> {
	    return { totalValue: 15000 }
	}
  async getAll(): Promise<Sale[]>{
    return [{ totalValue: 1 }]
  }
}

// Instanciando a classe
const saleService = new SaleService();

interface AuthUser {
  authenticate(user:User):Promise<{
    token:string
  }>
}