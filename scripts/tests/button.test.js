/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

beforeEach(() => {
    document.body.innerHTML = '<p id="par"></p>';
});

describe('DOM tests', () => {
    test('expect p content to change', () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toBe("You Clicked");
    })
})