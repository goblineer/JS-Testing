const isPangram = require('../src/is_pangram');

describe('isPangram()', () => {
  test('isPangram() is defined', () => {
    expect(isPangram).toBeDefined();
  });

  test('works with a pangram with only lower case', () => {
    // Arrange
    const myPangram = new Pangram('five hexing wizard bots jump quickly');
    // Assert
    expect(myPangram.isPangram()).toBe(true);
  });

  test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
    // Arrange
    const myPangram = new Pangram('abcdefghijklmnopqrstuvwxyz');
    // Act
    expect(myPangram.isPangram()).toBe(true);
  });

  test("missing character 'x'", () => {
    // Arrange
    const myPangram = new Pangram('the jazzy goblins annoy a quavering dwarf');
    // Assert
    expect(myPangram.isPangram()).toBe(false);
  });

  test('empty sentence', () => {
    // Arrange
    const myPangram = new Pangram('')
        // Assert
    expect(myPangram.isPangram()).toBe(false)
  });

  test('pangram with underscores instead of spaces works', () => {
    // Arrange
    const myPangram = new Pangram('pack_my_box_with_five_dozen_liquor_jugs')
    // Assert
    expect(myPangram.isPangram()).toBe(true)
  });

  test('pangram with numbers', () => {
    // Arrange
    const myPangram = new Pangram('five or six big jet planes zoomed quickly by the 4th tower')
    // Assert
    expect(myPangram.isPangram()).toBe(true)
  });

  test('sentence in all capital letters', () => {
    // Arrange
    const myPangram = new Pangram('SPHINX OF BLACK QUARTZ, JUDGE MY VOW')
    //Assert
    expect(myPangram.isPangram()).toBe(true)
});
});