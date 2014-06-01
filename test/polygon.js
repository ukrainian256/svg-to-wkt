
/**
 * SVG-to-WKT.js
 *
 * @package     svg-to-wkt
 * @copyright   2012 David McClure
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */


var SVGtoWKT = require('../svg-to-wkt');
var expect = require('chai').expect;


describe('SVGtoWKT.polygon()', function() {

  it('should create a closed POLYGON shape', function() {
    expect(SVGtoWKT.polygon('1,2 3,4 5,6')).to.equal(
      'POLYGON((1 -2,3 -4,5 -6,1 -2))'
    );
  });

  it('should trim empty whitespace on `points` string', function() {
    expect(SVGtoWKT.polygon(' 1,2 3,4 5,6 ')).to.equal(
      'POLYGON((1 -2,3 -4,5 -6,1 -2))'
    );
  });

});
