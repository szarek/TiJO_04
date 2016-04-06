describe('app', function () {
    'use strict';
    var app = window.app;

    describe('Division function', function () {
        it('should divide number a by b', function () {
            expect(app.divide(10, 5)).toEqual(2);
            expect(app.divide(15, 3)).toEqual(5)
        });
        it('should divide number a by b only when a is more than 1 and less than 100', function () {
            expect(app.divide(20, 5)).toEqual(4);
        });
        it('should return false when a is less than 1', function () {
            expect(app.divide(-2, 6)).toEqual(false);
        });
        it('should return false when a is more than 100', function () {
            expect(app.divide(105, 3)).toEqual(false);
        });
        it('should divide number a by b when a is 1', function () {
            expect(app.divide(1, -1)).toEqual(-1);
        });
        it('should divide number a by b when a is 100', function () {
            expect(app.divide(100, 10)).toEqual(10);
        });
        it('should divide number a by b when a is 0', function () {
            expect(app.divide(0, 1)).toEqual(false);
        });
        it('should divide number a by b when a is 101', function () {
            expect(app.divide(101, 10)).toEqual(false);
        });
        it('should return false when b is grater than a', function () {
            expect(app.divide(101, 103)).toEqual(false);
        });
        it('should return false when b is equal 0', function () {
            expect(app.divide(101, 0)).toEqual(false);
        });
    });
    describe('getDescendingNumbers function', function ()
    {
        it('should count down', function ()
        {
            expect(app.getDescendingNumbers(4,2)).toEqual('4 3 2');
        });
        it('should count down', function ()
        {
            expect(app.getDescendingNumbers(6,3)).toEqual('6 5 4 3');
        });
        it('should return value of type', function ()
        {
            expect(app.getDescendingNumbers(6,2)).toEqual(typeof descendingNumbers === 'number' );
        });
    });
    
    describe('areaOfTrapezoid function', function ()
    {
        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid(-1,3,1)).toEqual(false);
        });
        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid(1,-1,3)).toEqual(false);
        });
        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid(3,1,-1)).toEqual(false);
        });
        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid("s",2,1)).toEqual(false);
        });
        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid(1,"s",2)).toEqual(false);
        });
        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid(1,2,"s")).toEqual(false);
        });
        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid(1,2,3)).toEqual(false);
        });
        

        describe('maxArray',function()
        {
            it('should return max number with array',function()
            {
                expect(app.maxArray([2,6,8,5])).toEqual(8);
            });
            it('should return false if array is empty',function()
            {
                expect(app.maxArray([])).toEqual(false);
            });
        });

        describe('squareOdd',function()
        {
            it('should return array number',function()
            {
                expect(app.squareOdd([1,3,5])).toEqual([1,9,25]);
            });
            it('should return false if array have even numbers',function()
            {
                expect(app.squareOdd([3,4,5])).toEqual(false);
            });
            it('should return false if array is empty',function()
            {
                expect(app.squareOdd([])).toEqual(false);
            });
        });
    });
});
