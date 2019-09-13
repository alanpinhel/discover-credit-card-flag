import { discoverCreditCardFlag } from './main';

describe('discoverCreditCardFlag', () => {
  it('discoverCreditCardFlag(4) should return visa', () => {
    expect(discoverCreditCardFlag('4')).toBe('visa');
  });

  it('discoverCreditCardFlag(40011234123412) should return visa', () => {
    expect(discoverCreditCardFlag('40011234123412')).toBe('visa');
  });

  it('discoverCreditCardFlag(5) return master', () => {
    expect(discoverCreditCardFlag('5')).toBe('master');
  });

  it('discoverCreditCardFlag(50011234123412) return master', () => {
    expect(discoverCreditCardFlag('50011234123412')).toBe('master');
  });

  it('discoverCreditCardFlag(34) return amex', () => {
    expect(discoverCreditCardFlag('34')).toBe('amex');
  });

  it('discoverCreditCardFlag(34011234123412) return amex', () => {
    expect(discoverCreditCardFlag('34011234123412')).toBe('amex');
  });

  it('discoverCreditCardFlag(37011234123412) return amex', () => {
    expect(discoverCreditCardFlag('37011234123412')).toBe('amex');
  });

  it('discoverCreditCardFlag(37011234123412) return amex', () => {
    expect(discoverCreditCardFlag('37011234123412')).toBe('amex');
  });

  it('discoverCreditCardFlag(301) return diners', () => {
    expect(discoverCreditCardFlag('301')).toBe('diners');
  });

  it('discoverCreditCardFlag(30111234123412) return diners', () => {
    expect(discoverCreditCardFlag('30111234123412')).toBe('diners');
  });

  it('discoverCreditCardFlag(30511234123412) return diners', () => {
    expect(discoverCreditCardFlag('30511234123412')).toBe('diners');
  });

  it('discoverCreditCardFlag(36511234123412) return diners', () => {
    expect(discoverCreditCardFlag('36511234123412')).toBe('diners');
  });

  it('discoverCreditCardFlag(38511234123412) return diners', () => {
    expect(discoverCreditCardFlag('38511234123412')).toBe('diners');
  });

  it('discoverCreditCardFlag(636368) return elo', () => {
    expect(discoverCreditCardFlag('636368')).toBe('elo');
  });

  it('discoverCreditCardFlag(63636834123412) return elo', () => {
    expect(discoverCreditCardFlag('63636834123412')).toBe('elo');
  });

  it('discoverCreditCardFlag(43893534123412) return elo', () => {
    expect(discoverCreditCardFlag('43893534123412')).toBe('elo');
  });

  it('discoverCreditCardFlag(50417534123412) return elo', () => {
    expect(discoverCreditCardFlag('50417534123412')).toBe('elo');
  });

  it('discoverCreditCardFlag(45141634123412) return elo', () => {
    expect(discoverCreditCardFlag('45141634123412')).toBe('elo');
  });

  it('discoverCreditCardFlag(36297634123412) return elo', () => {
    expect(discoverCreditCardFlag('36297634123412')).toBe('elo');
  });

  it('discoverCreditCardFlag(50677634123412) return elo', () => {
    expect(discoverCreditCardFlag('50677634123412')).toBe('elo');
  });

  it('discoverCreditCardFlag(45767634123412) return elo', () => {
    expect(discoverCreditCardFlag('45767634123412')).toBe('elo');
  });

  it('discoverCreditCardFlag(40117634123412) return elo', () => {
    expect(discoverCreditCardFlag('40117634123412')).toBe('elo');
  });

  it('discoverCreditCardFlag(9) return undefined', () => {
    expect(discoverCreditCardFlag('9')).toBeUndefined();
  });
});
