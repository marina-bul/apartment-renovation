import { cn } from './classnames';

describe('classnames func', () => {
  test('should return correct result without mods', () => {
    const classNames = ['class1', 'class2'];
    const result = cn(classNames);
    expect(result).toBe('class1 class2');
  });

  test('should return correct result with mods', () => {
    const classNames = ['class1', 'class2'];
    const mods = { 'mod1': true, 'mod2': false, 'mod3': true };
    const result = cn(classNames, mods);
    expect(result).toBe('class1 class2 mod1 mod3');
  });

  test('should return correct result when mods are undefined', () => {
    const classNames = ['class1', 'class2'];
    const result = cn(classNames, undefined);
    expect(result).toBe('class1 class2');
  });

  test('should return only classnames string when mods are an empty object', () => {
    const classNames = ['class1', 'class2'];
    const mods = {};
    const result = cn(classNames, mods);
    expect(result).toBe('class1 class2');
  });

  test('should return only mods classes when classNames array is empty', () => {
    const classNames: string[] = [];
    const mods = { 'mod1': true, 'mod2': false, 'mod3': true };
    const result = cn(classNames, mods);
    expect(result).toBe('mod1 mod3');
  });

  test('should return an empty string when both classNames and mods are empty or falsy', () => {
    const result = cn([], {});
    expect(result).toBe('');
  });
});
