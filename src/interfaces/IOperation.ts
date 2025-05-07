//Interface Segregation Principle
export interface IOperation {
  execute(a: number, b: number): number;
  symbol(): string;
}
