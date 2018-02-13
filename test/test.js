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

describe('Page Loads', function () {
it('seeing if the favorites endpoint is set up', function(done) {
    app.get('/favorites'), function(req, res) {  
        expect(res.json()).to.be.an('object');
       
}
    });


});

