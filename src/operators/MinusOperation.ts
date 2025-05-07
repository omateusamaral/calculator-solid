import { IOperation } from "../interfaces/IOperation";

export class MinusOperation implements IOperation {
  execute(a: number, b: number): number {
    return a - b;
  }

  symbol(): string {
    return "-";
  }
}
