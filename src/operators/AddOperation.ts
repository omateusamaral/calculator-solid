// Single Responsibility principle = Cada classe faz uma única coisa
// Open/Close principle = Podemos adicionar uma nova operação sem modificar a classe Calculator, apenas criando uma nova classe que implementa uma interface.
// Liskov Substitution principle = Todas as classes que implementam a interface IOperation podem ser usadas no lugar da classe Calculator.
// Interface Segregation principle = A interface IOperation é pequena e específica, cada classe que implementa a interface tem apenas os métodos necessários para sua operação.

import { IOperation } from "../interfaces/IOperation";

export class AddOperation implements IOperation {
  execute(a: number, b: number): number {
    return a + b;
  }

  symbol(): string {
    return "+";
  }
}
