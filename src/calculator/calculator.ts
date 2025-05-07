// Single Responsibility principle = Cada classe faz uma única coisa.
// Open/Close principle = Podemos adicionar uma nova operação sem modificar a classe Calculator, apenas criando uma nova classe que implementa uma interface.
// Liskov Substitution principle = Todas as classes que implementam a interface IOperation podem ser usadas no lugar da classe Calculator. Para respeitar o LSP, uma classe ou implementação deve:

// ✅ Respeitar a assinatura dos métodos (tipagem).

// ✅ Cumprir o comportamento esperado desses métodos (semântica).

// Se qualquer uma das duas falhar, o sistema pode ter comportamento inesperado — e isso viola o LSP.

// Interface Segregation principle = A interface IOperation é pequena e específica, cada classe que implementa a interface tem apenas os métodos necessários para sua operação.
// Dependency Inversion Principle = Em vez de uma classe instanciar diretamente suas dependências (acoplando-se a elas), ela deve recebê-las de fora, geralmente por injeção de dependência (como no construtor).
import { IOperation } from "../interfaces/IOperation";

export class Calculator {
  constructor(private operations: IOperation[]) {}

  calculate(symbol: string, a: number, b: number): number {
    const op = this.operations.find((op) => op.symbol() === symbol);
    if (!op) throw new Error("Operação não suportada");
    return op.execute(a, b);
  }
}
