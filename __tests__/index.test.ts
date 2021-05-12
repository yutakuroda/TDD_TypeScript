import { isBreakOrContinueStatement } from "typescript";
import { Money, Expression, Bank } from "../src/index";

test("掛け算", () => {
  const five: Money = Money.doller(5);
  expect(five.times(2)).toEqual(Money.doller(10));
  expect(five.times(3)).toEqual(Money.doller(15));
});

test("足し算", () => {
  const five: Money = Money.doller(5);
  const sum: Expression = five.plus(five);
  const bank = new Bank();
  const reduced: Money = bank.reduce(sum, "USD");
  expect(reduced).toEqual(Money.doller(10));
})

test("equals", () => {
  expect(Money.doller(5).equals(Money.doller(5))).toBe(true);
  expect(Money.doller(5).equals(Money.doller(6))).toBe(false);
  expect(Money.doller(5).equals(Money.franc(5))).toBe(false);
});

test("通貨", () => {
  expect(Money.doller(1).currency()).toBe("USD");
  expect(Money.franc(1).currency()).toBe("CHF");
})
