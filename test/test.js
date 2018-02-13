const expect = require('chai').expect;
const request = require('request');
const express = require('express');
const app = express();



app.use(require('body-parser').urlencoded({ extended: true }));

describe('Testing the Tests', function () {
    it('should pass no matter what', function () {
        expect(true).to.be.true;
    });
});

describe('Eggplant Emoji Check', function () {
    it('does 🍆  = 🍆 ?', function () {
        expect('🍆 ').to.equal('🍆 ');
    });
});

