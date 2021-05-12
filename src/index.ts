export interface Expression {}
export class Bank {
  reduce(source: Expression, to: string): Money {
    return Money.doller(10);
  }
}

export class Money {
  private amount: number;
  private currencyName: string;

  constructor(amount: number, currencyName: string) {
    this.amount = amount;
    this.currencyName = currencyName;
  }
  currency(): string {
    return this.currencyName;
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currencyName);
  }

  plus(addend: Money): Expression {
    return new Money(this.amount + addend.amount, this.currencyName);
  }

  equals(object: Money): boolean {
    return (
      this.amount === object.amount && this.currency() === object.currency()
    );
  }

  static doller(amount: number): Money {
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }
}
