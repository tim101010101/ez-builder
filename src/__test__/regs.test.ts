import { Regs } from '../utils/regs';

const testRegs = (reg: RegExp, str: string): boolean => {
  return reg.test(str);
};

// p
test("'text' matches to p", () => {
  expect(testRegs(Regs.p, 'text')).toBeTruthy();
});

test("' text ' matches to p", () => {
  expect(testRegs(Regs.p, ' text ')).toBeTruthy();
});

test("'te# xt' matches to p", () => {
  expect(testRegs(Regs.p, 'te# xt')).toBeTruthy();
});

test("'te+ xt' matches to p", () => {
  expect(testRegs(Regs.p, 'te+ xt')).toBeTruthy();
});

// h1
test("'# title' matches to h1", () => {
  expect(testRegs(Regs.h1, '# title')).toBeTruthy();
});

test("'#title' does not matches to h1", () => {
  expect(testRegs(Regs.h1, '#title')).toBeFalsy();
});

test("'t#itle' does not matches to h1", () => {
  expect(testRegs(Regs.h1, 't#itle')).toBeFalsy();
});

test("'t# itle' does not matches to h1", () => {
  expect(testRegs(Regs.h1, 't# itle')).toBeFalsy();
});

// h2
test("'## title' matches to h2", () => {
  expect(testRegs(Regs.h2, '## title')).toBeTruthy();
});

test("'##title' does not matches to h2", () => {
  expect(testRegs(Regs.h2, '##title')).toBeFalsy();
});

test("'t##itle' does not matches to h2", () => {
  expect(testRegs(Regs.h2, 't##itle')).toBeFalsy();
});

test("'t## itle' does not matches to h2", () => {
  expect(testRegs(Regs.h2, 't## itle')).toBeFalsy();
});

// h3
test("'### title' matches to h3", () => {
  expect(testRegs(Regs.h3, '### title')).toBeTruthy();
});

test("'###title' does not matches to h3", () => {
  expect(testRegs(Regs.h3, '###title')).toBeFalsy();
});

test("'t###itle' does not matches to h3", () => {
  expect(testRegs(Regs.h3, 't###itle')).toBeFalsy();
});

test("'t### itle' does not matches to h3", () => {
  expect(testRegs(Regs.h3, 't### itle')).toBeFalsy();
});

// h4
test("'#### title' matches to h4", () => {
  expect(testRegs(Regs.h4, '#### title')).toBeTruthy();
});

test("'####title' does not matches to h4", () => {
  expect(testRegs(Regs.h4, '####title')).toBeFalsy();
});

test("'t####itle' does not matches to h4", () => {
  expect(testRegs(Regs.h4, 't####itle')).toBeFalsy();
});

test("'t#### itle' does not matches to h4", () => {
  expect(testRegs(Regs.h4, 't#### itle')).toBeFalsy();
});

// h5
test("'##### title' matches to h5", () => {
  expect(testRegs(Regs.h5, '##### title')).toBeTruthy();
});

test("'#####title' does not matches to h5", () => {
  expect(testRegs(Regs.h5, '#####title')).toBeFalsy();
});

test("'t#####itle' does not matches to h5", () => {
  expect(testRegs(Regs.h5, 't#####itle')).toBeFalsy();
});

test("'t##### itle' does not matches to h5", () => {
  expect(testRegs(Regs.h5, 't##### itle')).toBeFalsy();
});

// h6
test("'###### title' matches to h6", () => {
  expect(testRegs(Regs.h6, '###### title')).toBeTruthy();
});

test("'######title' does not matches to h6", () => {
  expect(testRegs(Regs.h6, '######title')).toBeFalsy();
});

test("'t######itle' does not matches to h6", () => {
  expect(testRegs(Regs.h6, 't######itle')).toBeFalsy();
});

test("'t###### itle' does not matches to h6", () => {
  expect(testRegs(Regs.h6, 't###### itle')).toBeFalsy();
});

// li
test("'+ li' matches to p", () => {
  expect(testRegs(Regs.li, '+ li')).toBeTruthy();
});

test("'+li' does not matches to p", () => {
  expect(testRegs(Regs.li, '+li')).toBeFalsy();
});

test("'l+i' matches to p", () => {
  expect(testRegs(Regs.li, 'l+i')).toBeFalsy();
});

test("'l+ i' matches to p", () => {
  expect(testRegs(Regs.li, 'l+ i')).toBeFalsy();
});
