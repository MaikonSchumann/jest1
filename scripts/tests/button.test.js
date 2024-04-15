/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

beforeEach(() => {
    // This will test only the p element on DOM
    // document.body.innerHTML = '<p id="par"></p>';

    // This will test the entire DOM
    let fs = require('fs');
    let fileContents = fs.readFileSync('index.html', 'utf-8');
    document.open();
    document.write(fileContents);
    document.close();
});

describe('DOM tests', () => {
    test('expect p content to change', () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toBe("You Clicked");
    });
    test('h1 should exist', () => {
        expect(document.getElementsByTagName('h1').length).toBe(1);
    });
});