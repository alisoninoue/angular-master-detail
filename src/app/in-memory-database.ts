import { InMemoryDbService } from "angular-in-memory-web-api";

import { Category } from "./pages/categories/shared/category.model";
import { Entry } from './pages/entries/shared/entry.model';

export class InMemoryDatabase implements InMemoryDbService {
  createDb(){
    const categories: Category[] = [
      { id: 1, name: "Moradia", description: "Pagamentos de Conta da Casa" },
      { id: 2, name: "Saúde", description: "Plano de Saúde e Remédios" },
      { id: 3, name: "Lazer", description: "Cinema, parques, praia, etc" },
      { id: 4, name: "Salário", description: "Recebimento de Salário" },
      { id: 5, name: "Freela", description: "Trabalhos como freelancer"}
    ];

    const entries: Entry[] = [
      { id: 1, name: "Gás de cozinha", categoryId: categories[0].id, category: categories[0], paid: true, date: "12/01/2019", amount: "15,02", type: "expense", description: "Pagamentos de Conta da Casa" } as Entry,
      { id: 2, name: "Pagode", categoryId: categories[1].id, category: categories[1], paid: true, date: "27/11/2019", amount: "8300,02", type: "revenue", description: "Salário" } as Entry,
    ];

    return { categories, entries }
  }
}
