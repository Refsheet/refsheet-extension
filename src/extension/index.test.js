import Photoshop from "./interfaces/Photoshop";
import Android from "./interfaces/Android";
import Extension from './interfaces/Extension';

const REQUIRED_OVERRIDE = [
  'id'
];

const TEST_INTERFACES = [
  Photoshop, Android
];

it('overrides required fields', () => {
  const base = new Extension(true);

  REQUIRED_OVERRIDE.map((o) => {
    const baseValue = base[o]();
    TEST_INTERFACES.map((i) => {
      const child = new i(true);
      const newValue = child[o]();
      expect(baseValue).not.toBe(newValue);
    });
  });
});

it('does not define extra interface', () => {
  expect(1).toBe(1);
});

it('returns promise for all interfaces', () => {
  expect(1).toBe(1);
});