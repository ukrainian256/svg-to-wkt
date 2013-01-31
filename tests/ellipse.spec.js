
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

// SVG-to-WKT 0.0.1
// (c) 2013 David McClure
// http://dclure.org


describe('ellipse', function() {


  afterEach(function() {
    SVGtoWKT.DENSITY = 1;
  });


  it('should create an elliptical POLYGON shape', function() {

    // Create ellipse with a horizontal radius of 1 and a vertical radius
    // of 1.6. The circumference of this ellipse is ~8.38, which is
    // rendered with 8 points, one for each of the axis intercepts and one
    // for each of the quadrants.
    var raw = SVGtoWKT.ellipse(0, 0, 1, 1.6).match(/\(\(([\s\S]+)\)\)/);
    var points = raw[1].split(',');

    // Should have 9 points.
    expect(points.length).toEqual(9);

    // Positive X-axis intercept.
    var p0 = points[0].split(' ');
    expect(parseFloat(p0[0], 10)).toEqual(1);
    expect(parseFloat(p0[1], 10)).toEqual(0);

    // Quadrant 1 point.
    var p1 = points[1].split(' ');
    expect(p1[0]).toBeGreaterThan(0);
    expect(p1[1]).toBeGreaterThan(0);

    // Positive Y-axis intercept.
    var p2 = points[2].split(' ');
    expect(parseFloat(p2[0], 10)).toEqual(0);
    expect(parseFloat(p2[1], 10)).toEqual(1.6);

    // Quadrant 2 point.
    var p3 = points[3].split(' ');
    expect(p3[0]).toBeLessThan(0);
    expect(p3[1]).toBeGreaterThan(0);

    // Negative X-axis intercept.
    var p4 = points[4].split(' ');
    expect(parseFloat(p4[0], 10)).toEqual(-1);
    expect(parseFloat(p4[1], 10)).toEqual(0);

    // Quadrant 3 point.
    var p5 = points[5].split(' ');
    expect(p5[0]).toBeLessThan(0);
    expect(p5[1]).toBeLessThan(0);

    // Negative Y-axis intercept.
    var p6 = points[6].split(' ');
    expect(parseFloat(p6[0], 10)).toEqual(0);
    expect(parseFloat(p6[1], 10)).toEqual(-1.6);

    // Quadrant 4 point.
    var p7 = points[7].split(' ');
    expect(p7[0]).toBeGreaterThan(0);
    expect(p7[1]).toBeLessThan(0);

    // Closing point.
    var p8 = points[8].split(' ');
    expect(parseFloat(p8[0], 10)).toEqual(1);
    expect(parseFloat(p8[1], 10)).toEqual(0);

  });


  it('should react to different density settings', function() {

    SVGtoWKT.DENSITY = 1;
    var raw = SVGtoWKT.ellipse(0, 0, 1, 1.6).match(/\(\(([\s\S]+)\)\)/);
    var points1 = raw[1].split(',');

    SVGtoWKT.DENSITY = 2;
    raw = SVGtoWKT.ellipse(0, 0, 1, 1.6).match(/\(\(([\s\S]+)\)\)/);
    points2 = raw[1].split(',');

    // Should be more points when density is higher.
    expect(points2.length).toBeGreaterThan(points1.length);

  });


});
