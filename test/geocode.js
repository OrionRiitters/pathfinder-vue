const geocode = require('../ext_apis/geocode-api');
const expect = require('chai').expect;


//TODO: Write more tests
describe('#geocode()', function() {
    this.timeout(5000);
    context('with no arguments', function() {
        it('should still return ', function() {
            geocode().then(res => {
                expect(res).to.be.empty;
            }).catch( function(err) {
                console.log(err);
         });
        });
    });

    context('with proper arguments', function() {
        it('should return latitude and longitude keys', function() {
            geocode('Little Falls', "MN").then(res => {
                expect(res[0]).to.contain.keys('lat', 'lon');
            })
                .catch( function(err) {
                    console.log(err);
                });
        });
    });

/*    context('with nonsense string arguments', function() {
        it('should return empty', function() {
            expect()
        });
    });

    */
});

