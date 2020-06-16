const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const chaiHttp = require('chai-http');

chai.use(chaiAsPromised);
chai.use(chaiHttp);

global.expect = chai.expect;
global.request = chai.request;
