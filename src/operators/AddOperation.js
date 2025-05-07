"use strict";
// Single Responsibility principle = Cada classe faz uma única coisa
// Open/Close principle = Podemos adicionar uma nova operação sem modificar a classe Calculator, apenas criando uma nova classe que implementa uma interface.
// Liskov Substitution principle = Todas as classes que implementam a interface IOperation podem ser usadas no lugar da classe Calculator.
// Interface Segregation principle = A interface IOperation é pequena e específica, cada classe que implementa a interface tem apenas os métodos necessários para sua operação.
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddOperation = void 0;
class AddOperation {
    execute(a, b) {
        return a + b;
    }
    symbol() {
        return "+";
    }
}
exports.AddOperation = AddOperation;
