module.exports = function(test, getFileContents, Smack) {
	test( "error when compiling with nonexistent package", function(t){
		var exceptionThrown = false;
		try {
			Smack.compile('NoPackageError', "pack this.package.doesnt.exist; func doNothing() {}", {});
		} catch(e) {
			exceptionThrown = true;
		}
		t.ok(exceptionThrown, 'failed compiling source with non-existent package');

		if(typeof t.end === 'function') t.end();
	});

	getFileContents('testCode/arithmetics.smk', function(source) {
		test( "Arithmetics", function( t ) {
			
			var mc = {};

			console.log(source);
			Smack.createPackage('tst', mc);
			Smack.compile('arithmetics', source, mc);

			t.equal(mc.tst._f.add(1.1, 1.1), 2.2, '1.1 + 1.1');

			t.equal(mc.tst._f.add(-1.1, 1.1), 0, '-1.1 + 1.1');

			t.equal(mc.tst._f.add(1.1, -1.1), 0, '1.1 + -1.1');

			t.equal(mc.tst._f.add(-1.1, -1.1), -2.2, '-1.1 + -1.1');

			t.equal(mc.tst._f.add(0, -1.1), -1.1, '0 + -1.1');

			t.equal(mc.tst._f.add(1.1, 0), 1.1, '1.1 + 0');
			
			t.equal(mc.tst._f.add("string1", " string2"), "string1 string2", '"string1" + " string2"');
			
			t.equal(mc.tst._f.add(1, " string2"), "1 string2", '1 + " string2"');
			
			t.equal(mc.tst._f.add("string ", 2), "string 2", '"string " + 2');
			

			t.equal(mc.tst._f.sub(1.1, 1.1), 0, '1.1 - 1.1');

			t.equal(mc.tst._f.sub(-1.1, 1.1), -2.2, '-1.1 - 1.1');

			t.equal(mc.tst._f.sub(1.1, -1.1), 2.2, '1.1 - -1.1');

			t.equal(mc.tst._f.sub(-1.1, -1.1), 0, '-1.1 - -1.1');

			t.equal(mc.tst._f.sub(0, 1.1), -1.1, '0 - 1.1');

			t.equal(mc.tst._f.sub(-1.1, 0), -1.1, '-1.1 - 0');


			t.equal(mc.tst._f.mul(1, 1), 1, '1 * 1');

			t.equal(mc.tst._f.mul(-1, 1), -1, '-1 * 1');

			t.equal(mc.tst._f.mul(1, -1), -1, '1 * -1');

			t.equal(mc.tst._f.mul(-1, -1), 1, '-1 * -1');

			t.equal(mc.tst._f.mul(2, 0.1), 0.2, '2 * 0.1');

			t.equal(mc.tst._f.mul(1, 0), 0, '1 * 0');

			t.equal(mc.tst._f.mul(0, -1), 0, '0 * -1');


			t.equal(mc.tst._f.div(1, 1), 1, '1 / 1');

			t.equal(mc.tst._f.div(-1, 1), -1, '-1 / 1');

			t.equal(mc.tst._f.div(1, -1), -1, '1 / -1');

			t.equal(mc.tst._f.div(-1, -1), 1, '-1 / -1');

			t.equal(mc.tst._f.div(2, 0.1), 20, '2 / 0.1');

			t.equal(mc.tst._f.div(1, 0), Infinity, '1 / 0');

			t.equal(mc.tst._f.div(-1, 0), -Infinity, '-1 / 0');

			t.equal(mc.tst._f.div(0, -1), 0, '0 / -1');


			t.equal(mc.tst._f.mod(1, 1), 0, '1 % 1');

			t.equal(mc.tst._f.mod(-1, 1), 0, '-1 % 1');

			t.equal(mc.tst._f.mod(3, 5), 3, '3 % 5');

			t.equal(mc.tst._f.mod(-3, 5), -3, '-3 % 5');

			t.equal(mc.tst._f.mod(22, -5), 2, '22 % -5');

			t.equal(mc.tst._f.mod(-22, -5 ), -2, '-22 % -5');

			t.equal(mc.tst._f.mod(1, 0.5), 0, '1 % 0.5');

			t.ok(isNaN(mc.tst._f.mod(1, 0)), '1 % 0');

			t.equal(mc.tst._f.mod(0, -1), 0, '0 % -1');


			t.equal(mc.tst._f.pow(1, 1), 1, '1^1');

			t.equal(mc.tst._f.pow(-1, 2),1, '-1^2');

			t.equal(mc.tst._f.pow(2, 2), 4, '2^2');

			t.equal(mc.tst._f.pow(1.5, 2), 2.25, '1.5^2');

			t.equal(mc.tst._f.pow(4, 0.5), 2, '4^0.5');

			t.equal(mc.tst._f.pow(2, -1), 0.5, '2^-1');

			t.equal(mc.tst._f.pow(1, 0), 1, '1^0');

			t.equal(mc.tst._f.pow(0, 1), 0, '0^1');

			t.equal(mc.tst._f.pow(0, -1), Infinity, '0^-1');

			t.equal(mc.tst._f.pow(-0, -1), -Infinity, '-0^-1');

			
			t.equal(mc.tst._f.powParen(-1, 2), 1, '(-1)^2');
			
			t.equal(mc.tst._f.powParen(-1, 3), -1, '(-1)^3');


			t.equal(mc.tst._f.powSignedParen(1, 2 ), -1, '-(1)^2');
			
			t.equal(mc.tst._f.powSignedParen(-1, 3), 1, '-(-1)^3');


			t.equal(mc.tst._f.eq(1.1, 1.1), true, '1.1 == 1.1');

			t.equal(mc.tst._f.eq(1, -1), false, '1 == -1');


			t.equal(mc.tst._f.neq(1.1, 1.1), false, '1.1 != 1.1');

			t.equal(mc.tst._f.neq(1,-1), true, '1 != -1');


			t.equal(mc.tst._f.lt(-2, 1), true, '-2 < 1');

			t.equal(mc.tst._f.lt(0, 0), false, '0 < 0');

			t.equal(mc.tst._f.lt(1, -2), false, '1 < -2');


			t.equal(mc.tst._f.le(-2, 1), true, '-2 <= 1');

			t.equal(mc.tst._f.le(0, 0), true, '0 <= 0');

			t.equal(mc.tst._f.le(1,-2), false, '1 <= -2');


			t.equal(mc.tst._f.gt(-2, 1), false, '-2 > 1');

			t.equal(mc.tst._f.gt(0, 0), false, '0 > 0');

			t.equal(mc.tst._f.gt(1, -2), true, '1 > -2');


			t.equal(mc.tst._f.ge(-2,1), false, '-2 >= 1');

			t.equal(mc.tst._f.ge(0, 0), true, '0 >= 0');

			t.equal(mc.tst._f.ge(1,-2), true, '1 >= -2');


			t.equal(mc.tst._f.plusMinusPlus(3,2), 1, '3 + - + 2');

			t.equal(mc.tst._f.minusPlusMinus(3,2), 5, '3 - + - 2');

			t.equal(mc.tst._f.plusThenMinus(3,2,1), 4, '3 + 2 - 1');

			t.equal(mc.tst._f.minusThenPlus(3,2,1), 2, '3 - 2 + 1');


			t.equal(mc.tst._f.addThenAdd(5,3,2), 10, '5 + 3 + 2');

			t.equal(mc.tst._f.addThenSub(5,3,2), 6, '5 + 3 - 2');

			t.equal(mc.tst._f.addThenMul(5,3,2), 11, '5 + 3 * 2');

			t.equal(mc.tst._f.addThenDiv(5,3,2), 6.5, '5 + 3 / 2');

			t.equal(mc.tst._f.addThenMod(5,3,2), 6, '5 + 3 % 2');

			t.equal(mc.tst._f.addThenPow(5,3,2), 14, '5 + 3^2');


			t.equal(mc.tst._f.subThenAdd(5,3,2), 4, '5 - 3 + 2');

			t.equal(mc.tst._f.subThenSub(5,3,2), 0, '5 - 3 - 2');

			t.equal(mc.tst._f.subThenMul(5,3,2), -1, '5 - 3 * 2');

			t.equal(mc.tst._f.subThenDiv(5,3,2), 3.5, '5 - 3 / 2');

			t.equal(mc.tst._f.subThenMod(5,3,2), 4, '5 - 3 % 2');

			t.equal(mc.tst._f.subThenPow(5,3,2), -4, '5 - 3^2');


			t.equal(mc.tst._f.mulThenAdd(5,3,2), 17, '5 * 3 + 2');

			t.equal(mc.tst._f.mulThenSub(5,3,2), 13, '5 * 3 - 2');

			t.equal(mc.tst._f.mulThenMul(5,3,2), 30, '5 * 3 * 2');

			t.equal(mc.tst._f.mulThenDiv(5,3,2), 7.5, '5 * 3 / 2');

			t.equal(mc.tst._f.mulThenMod(5,3,2), 1, '5 * 3 % 2');

			t.equal(mc.tst._f.mulThenPow(5,3,2), 45, '5 * 3^2');


			t.equal(mc.tst._f.divThenAdd(6,3,2), 4, '6 / 3 + 2');

			t.equal(mc.tst._f.divThenSub(6,3,2), 0, '6 / 3 - 2');

			t.equal(mc.tst._f.divThenMul(6,3,2), 4, '6 / 3 * 2');

			t.equal(mc.tst._f.divThenDiv(6,3,2), 1, '6 / 3 / 2');

			t.equal(mc.tst._f.divThenMod(6,3,2), 0, '6 / 3 % 2');

			t.equal(mc.tst._f.divThenPow(18,3,2), 2, '18 / 3^2');


			t.equal(mc.tst._f.modThenAdd(5,3,2), 4, '5 % 3 + 2');

			t.equal(mc.tst._f.modThenSub(5,3,2), 0, '5 % 3 - 2');

			t.equal(mc.tst._f.modThenMul(5,3,2), 4, '5 % 3 * 2');

			t.equal(mc.tst._f.modThenDiv(5,3,2), 1, '5 % 3 / 2');

			t.equal(mc.tst._f.modThenMod(5,3,2), 0, '5 % 3 % 2');

			t.equal(mc.tst._f.modThenPow(5,3,2), 5, '5 % 3^2');


			t.equal(mc.tst._f.powThenAdd(2,3,4), 12, '2^3 + 4');

			t.equal(mc.tst._f.powThenSub(2,3,4), 4, '2^3 - 4');

			t.equal(mc.tst._f.powThenMul(2,3,4), 32, '2^3 * 4');

			t.equal(mc.tst._f.powThenDiv(2,3,4), 2, '2^3 / 4');

			t.equal(mc.tst._f.powThenMod(2,3,4), 0, '2^3 % 4');

			t.equal(mc.tst._f.powThenPow(3,3,2), 19683, '3^3^2');


			t.equal(mc.tst._f.parenAddThenMul(2,3,4), 20, '(2 + 3) * 4');

			t.equal(mc.tst._f.parenAddThenDiv(2,2,4), 1, '(2 + 2) / 4');

			t.equal(mc.tst._f.parenAddThenMod(2,3,4), 1, '(2 + 3) % 4');

			t.equal(mc.tst._f.parenAddThenPow(1,2,3), 27, '(1 + 2)^3');


			t.equal(mc.tst._f.parenSubThenMul(2,3,4), -4, '(2 - 3) * 4');

			t.equal(mc.tst._f.parenSubThenDiv(2,3,4), -0.25, '(2 - 3) / 4');

			t.equal(mc.tst._f.parenSubThenMod(2,3,4), -1, '(2 - 3) % 4');

			t.equal(mc.tst._f.parenSubThenPow(1,3,3), -8, '(1 - 3)^3');


			t.equal(mc.tst._f.parenMulThenPow(2,3,4), 1296, '(2 * 3)^4');

			t.equal(mc.tst._f.parenDivThenPow(1,2,4), 0.0625, '(1 / 2)^4');

			t.equal(mc.tst._f.parenModThenPow(2,3,4), 16, '(2 % 3)^4');
			

			t.equal(mc.tst._f.parenPowThenPow(2,1,3), 8, '(2^1)^3');


			t.equal(mc.tst._f.addEqAdd(1,1,2,0), true, '1 + 1 == 2 + 0');

			t.equal(mc.tst._f.addEqAdd(1,1,1,2), false, '1 + 1 == 1 + 2');


			t.equal(mc.tst._f.addNeqAdd(1,1,2,0), false, '1 + 1 != 2 + 0');

			t.equal(mc.tst._f.addNeqAdd(1,1,1,2), true, '1 + 1 != 1 + 2');


			t.equal(mc.tst._f.addLtAdd(1,1,2,1), true, '1 + 1 < 2 + 1');

			t.equal(mc.tst._f.addLtAdd(-1,-1,1,0), true, '-1 + -1 < 1 + 0');

			t.equal(mc.tst._f.addLtAdd(1,1,2,0), false, '1 + 1 < 2 + 0');

			t.equal(mc.tst._f.addLtAdd(1,1,1,0), false, '1 + 1 < 1 + 0');

			t.equal(mc.tst._f.addLtAdd(1,1,-1,-2), false, '1 + 1 < -1 + -2');


			t.equal(mc.tst._f.addLeAdd(1,1,2,1), true, '1 + 1 <= 2 + 1');

			t.equal(mc.tst._f.addLeAdd(-1,-1,1,0), true, '-1 + -1 <= 1 + 0');

			t.equal(mc.tst._f.addLeAdd(1,1,2,0), true, '1 + 1 <= 2 + 0');

			t.equal(mc.tst._f.addLeAdd(1,1,1,0), false, '1 + 1 <= 1 + 0');

			t.equal(mc.tst._f.addLeAdd(1,1,-1,-2), false, '1 + 1 <= -1 + -2');


			t.equal(mc.tst._f.addGtAdd(1,1,2,1), false, '1 + 1 > 2 + 1');

			t.equal(mc.tst._f.addGtAdd(-1,-1,1,0), false, '-1 + -1 > 1 + 0');

			t.equal(mc.tst._f.addGtAdd(1,1,2,0), false, '1 + 1 > 2 + 0');

			t.equal(mc.tst._f.addGtAdd(1,1,1,0), true, '1 + 1 > 1 + 0');

			t.equal(mc.tst._f.addGtAdd(1,1,-1,-2), true, '1 + 1 > -1 + -2');


			t.equal(mc.tst._f.addGeAdd(1,1,2,1), false, '1 + 1 >= 2 + 1');

			t.equal(mc.tst._f.addGeAdd(-1,-1,1,0), false, '-1 + -1 >= 1 + 0');

			t.equal(mc.tst._f.addGeAdd(1,1,2,0), true, '1 + 1 >= 2 + 0');

			t.equal(mc.tst._f.addGeAdd(1,1,1,0), true, '1 + 1 >= 1 + 0');

			t.equal(mc.tst._f.addGeAdd(1,1,-1,-2), true, '1 + 1 >= -1 + -2');


			t.equal(mc.tst._f.subEqSub(3,1,2,0), true, '3 - 1 == 2 - 0');

			t.equal(mc.tst._f.subEqSub(1,1,1,2), false, '1 - 1 == 1 - 2');


			t.equal(mc.tst._f.subNeqSub(3,1,2,0), false, '3 - 1 != 2 - 0');

			t.equal(mc.tst._f.subNeqSub(1,1,1,2), true, '1 - 1 != 1 - 2');


			t.equal(mc.tst._f.subLtSub(1,1,2,1), true, '1 - 1 < 2 - 1');

			t.equal(mc.tst._f.subLtSub(-1,-1,1,0), true, '-1 - -1 < 1 - 0');

			t.equal(mc.tst._f.subLtSub(1,1,2,0), true, '1 - 1 < 2 - 0');

			t.equal(mc.tst._f.subLtSub(3,1,0,-2), false, '3 - 1 < 0 - (-2)');

			t.equal(mc.tst._f.subLtSub(2,1,-1,-2), false, '2 - 1 < -1 - -2');


			t.equal(mc.tst._f.subLeSub(1,1,2,1), true, '1 - 1 <= 2 - 1');

			t.equal(mc.tst._f.subLeSub(-1,-1,1,0), true, '-1 - -1 <= 1 - 0');

			t.equal(mc.tst._f.subLeSub(1,1,2,0), true, '1 - 1 <= 2 - 0');

			t.equal(mc.tst._f.subLeSub(3,1,1,0), false, '3 - 1 <= 1 - 0');

			t.equal(mc.tst._f.subLeSub(3,1,-1,-2), false, '3 - 1 <= -1 - -2');


			t.equal(mc.tst._f.subGtSub(1,1,2,1), false, '1 - 1 > 2 - 1');

			t.equal(mc.tst._f.subGtSub(-1,-1,1,0), false, '-1 - -1 > 1 - 0');

			t.equal(mc.tst._f.subGtSub(1,1,2,0), false, '1 - 1 > 2 - 0');

			t.equal(mc.tst._f.subGtSub(3,1,1,0), true, '3 - 1 > 1 - 0');

			t.equal(mc.tst._f.subGtSub(3,1,-1,-2), true, '3 - 1 > -1 - -2');


			t.equal(mc.tst._f.subGeSub(-1,1,1,1), false, '-1 - 1 >= 1 - 1');

			t.equal(mc.tst._f.subGeSub(-1,-1,1,0), false, '-1 - -1 >= 1 - 0');

			t.equal(mc.tst._f.subGeSub(1,1,2,0), false, '1 - 1 >= 2 - 0');

			t.equal(mc.tst._f.subGeSub(2,1,1,0), true, '2 - 1 >= 1 - 0');

			t.equal(mc.tst._f.subGeSub(4,1,0,-2), true, '4 - 1 >= 0 - -2');


			t.equal(mc.tst._f.mulEqMul(1,1,1,1), true, '1 * 1 == 1 * 1');

			t.equal(mc.tst._f.mulEqMul(1,1,1,2), false, '1 * 1 == 1 * 2');


			t.equal(mc.tst._f.mulNeqMul(1,1,1,1), false, '1 * 1 != 1 * 1');

			t.equal(mc.tst._f.mulNeqMul(1,1,1,2), true, '1 * 1 != 1 * 2');


			t.equal(mc.tst._f.mulLtMul(1,1,2,1), true, '1 * 1 < 2 * 1');

			t.equal(mc.tst._f.mulLtMul(-1,1,1,0), true, '-1 * 1 < 1 * 0');

			t.equal(mc.tst._f.mulLtMul(1,1,1,1), false, '1 * 1 < 1 * 1');

			t.equal(mc.tst._f.mulLtMul(1,1,-1,2), false, '1 * 1 < -1 * 2');

			t.equal(mc.tst._f.mulLtMul(1,2,1,1), false, '1 * 1 < -1 * -2');


			t.equal(mc.tst._f.mulLeMul(1,1,2,1), true, '1 * 1 <= 2 * 1');

			t.equal(mc.tst._f.mulLeMul(-1,1,1,0), true, '-1 * 1 <= 1 * 0');

			t.equal(mc.tst._f.mulLeMul(1,1,1,1), true, '1 * 1 <= 1 * 1');

			t.equal(mc.tst._f.mulLeMul(1,1,-1,2), false, '1 * 1 <= -1 * 2');

			t.equal(mc.tst._f.mulLeMul(1,2,1,1), false, '1 * 2 <= 1 * 1');


			t.equal(mc.tst._f.mulGtMul(1,1,2,1), false, '1 * 1 > 2 * 1');

			t.equal(mc.tst._f.mulGtMul(-1,1,1,0), false, '-1 * 1 > 1 * 0');

			t.equal(mc.tst._f.mulGtMul(1,1,1,1), false, '1 * 1 > 1 * 1');

			t.equal(mc.tst._f.mulGtMul(1,1,-1,2), true, '1 * 1 > -1 * 2');

			t.equal(mc.tst._f.mulGtMul(1,2,1,1), true, '1 * 2 > 1 * 1');


			t.equal(mc.tst._f.mulGeMul(1,1,2,1), false, '1 * 1 >= 2 * 1');

			t.equal(mc.tst._f.mulGeMul(-1,1,1,0), false, '-1 * 1 >= 1 * 0');

			t.equal(mc.tst._f.mulGeMul(1,1,1,1), true, '1 * 1 >= 1 * 1');

			t.equal(mc.tst._f.mulGeMul(1,1,-1,2), true, '1 * 1 >= -1 * 2');

			t.equal(mc.tst._f.mulGeMul(1,2,1,1), true, '1 * 2 >= 1 * 1');


			t.equal(mc.tst._f.divEqDiv(1,1,1,1), true, '1 / 1 == 1 / 1');

			t.equal(mc.tst._f.divEqDiv(1,1,1,2), false, '1 / 1 == 1 / 2');


			t.equal(mc.tst._f.divNeqDiv(1,1,1,1), false, '1 / 1 != 1 / 1');

			t.equal(mc.tst._f.divNeqDiv(1,1,1,2), true, '1 / 1 != 1 / 2');


			t.equal(mc.tst._f.divLtDiv(1,1,2,1), true, '1 / 1 < 2 / 1');

			t.equal(mc.tst._f.divLtDiv(-1,1,1,0), true, '-1 / 1 < 1 / 0');

			t.equal(mc.tst._f.divLtDiv(1,1,1,1), false, '1 / 1 < 1 / 1');

			t.equal(mc.tst._f.divLtDiv(1,1,-1,2), false, '1 / 1 < -1 / 2');

			t.equal(mc.tst._f.divLtDiv(1,2,-1,-2), false, '1 / 1 < -1 / -2');


			t.equal(mc.tst._f.divLeDiv(1,1,2,1), true, '1 / 1 <= 2 / 1');

			t.equal(mc.tst._f.divLeDiv(-1,1,1,0), true, '-1 / 1 <= 1 / 0');

			t.equal(mc.tst._f.divLeDiv(1,1,1,1), true, '1 / 1 <= 1 / 1');

			t.equal(mc.tst._f.divLeDiv(1,1,-1,2), false, '1 / 1 <= -1 / 2');

			t.equal(mc.tst._f.divLeDiv(1,2,1,1), true, '1 / 2 <= 1 / 1');


			t.equal(mc.tst._f.divGtDiv(1,1,2,1), false, '1 / 1 > 2 / 1');

			t.equal(mc.tst._f.divGtDiv(-1,1,1,0), false, '-1 / 1 > 1 / 0');

			t.equal(mc.tst._f.divGtDiv(1,1,1,1), false, '1 / 1 > 1 / 1');

			t.equal(mc.tst._f.divGtDiv(1,1,-1,2), true, '1 / 1 > -1 / 2');

			t.equal(mc.tst._f.divGtDiv(1,2,1,1), false, '1 / 2 > 1 / 1');


			t.equal(mc.tst._f.divGeDiv(1,1,2,1), false, '1 / 1 >= 2 / 1');

			t.equal(mc.tst._f.divGeDiv(-1,1,1,0), false, '-1 / 1 >= 1 / 0');

			t.equal(mc.tst._f.divGeDiv(1,1,1,1), true, '1 / 1 >= 1 / 1');

			t.equal(mc.tst._f.divGeDiv(1,1,-1,2), true, '1 / 1 >= -1 / 2');

			t.equal(mc.tst._f.divGeDiv(1,2,1,1), false, '1 / 2 >= 1 / 1');


			t.equal(mc.tst._f.modEqMod(1,1,1,1), true, '1 % 1 == 1 % 1');

			t.equal(mc.tst._f.modEqMod(1,1,1,2), false, '1 % 1 == 1 % 2');


			t.equal(mc.tst._f.modNeqMod(1,1,1,1), false, '1 % 1 != 1 % 1');

			t.equal(mc.tst._f.modNeqMod(1,1,1,2), true, '1 % 1 != 1 % 2');


			t.equal(mc.tst._f.modLtMod(1,1,1,2), true, '1 % 1 < 1 % 2');

			t.equal(mc.tst._f.modLtMod(-1,1,1,2), true, '-1 % 1 < 1 % 2');

			t.equal(mc.tst._f.modLtMod(1,1,1,1), false, '1 % 1 < 1 % 1');

			t.equal(mc.tst._f.modLtMod(1,1,-1,2), false, '1 % 1 < -1 % 2');

			t.equal(mc.tst._f.modLtMod(1,2,1,1), false, '1 % 2 < 1 % 1');


			t.equal(mc.tst._f.modLeMod(1,1,1,2), true, '1 % 1 <= 1 % 2');

			t.equal(mc.tst._f.modLeMod(-1,1,1,2), true, '-1 % 1 <= 1 % 2');

			t.equal(mc.tst._f.modLeMod(1,1,1,1), true, '1 % 1 <= 1 % 1');

			t.equal(mc.tst._f.modLeMod(1,1,-1,2), false, '1 % 1 <= -1 % 2');

			t.equal(mc.tst._f.modLeMod(1,2,1,1), false, '1 % 2 <= 1 % 1');


			t.equal(mc.tst._f.modGtMod(1,1,1,2), false, '1 % 1 > 1 % 2');

			t.equal(mc.tst._f.modGtMod(-1,1,1,2), false, '-1 % 1 > 1 % 2');

			t.equal(mc.tst._f.modGtMod(1,1,1,1), false, '1 % 1 > 1 % 1');

			t.equal(mc.tst._f.modGtMod(1,1,-1,2), true, '1 % 1 > -1 % 2');

			t.equal(mc.tst._f.modGtMod(1,2,1,1), true, '1 % 2 > 1 % 1');


			t.equal(mc.tst._f.modGeMod(1,1,1,2), false, '1 % 1 >= 1 % 2');

			t.equal(mc.tst._f.modGeMod(-1,1,1,2), false, '-1 % 1 >= 1 % 2');

			t.equal(mc.tst._f.modGeMod(1,1,1,1), true, '1 % 1 >= 1 % 1');

			t.equal(mc.tst._f.modGeMod(1,1,-1,2), true, '1 % 1 >= -1 % 2');

			t.equal(mc.tst._f.modGeMod(1,2,1,1), true, '1 % 2 >= 1 % 1');


			t.equal(mc.tst._f.powEqPow(1,1,1,1), true, '1^1 == 1^1');

			t.equal(mc.tst._f.powEqPow(1,1,2,1), false, '1^1 == 1^2');


			t.equal(mc.tst._f.powNeqPow(1,1,1,1), false, '1^1 != 1^1');

			t.equal(mc.tst._f.powNeqPow(1,1,2,1), true, '1^1 != 1^2');


			t.equal(mc.tst._f.powLtPow(1,1,2,1), true, '1^1 < 1^2');

			t.equal(mc.tst._f.powLtPow(-1,1,1,2), true, '-1^1 < 1^2');

			t.equal(mc.tst._f.powLtPow(1,1,1,1), false, '1^1 < 1^1');

			t.equal(mc.tst._f.powLtPow(1,-2,1,-1), false, '1^-2 < 1^-1');

			t.equal(mc.tst._f.powLtPow(2,1,1,1), false, '2^1 < 1^1');


			t.equal(mc.tst._f.powLePow(1,1,2,1), true, '1^1 <= 1^2');

			t.equal(mc.tst._f.powLePow(-1,1,1,2), true, '-1^1 <= 1^2');

			t.equal(mc.tst._f.powLePow(1,1,1,1), true, '1^1 <= 1^1');

			t.equal(mc.tst._f.powLePow(2,-1,2,-2), false, '2^-1 <= 2^-2');

			t.equal(mc.tst._f.powLePow(2,1,1,1), false, '2^1 <= 1^1');


			t.equal(mc.tst._f.powGtPow(1,1,2,1), false, '1^1 > 1^2');

			t.equal(mc.tst._f.powGtPow(-1,1,1,2), false, '-1^1 > 1^2');

			t.equal(mc.tst._f.powGtPow(1,1,1,1), false, '1^1 > 1^1');

			t.equal(mc.tst._f.powGtPow(1,1,-2,-2), true, '1^1 > 2^-2');

			t.equal(mc.tst._f.powGtPow(2,1,1,1), true, '2^1 > 1^1');


			t.equal(mc.tst._f.powGePow(1,1,2,1), false, '1^1 >= 1^2');

			t.equal(mc.tst._f.powGePow(-1,1,1,2), false, '-1^1 >= 1^2');

			t.equal(mc.tst._f.powGePow(1,1,1,1), true, '1^1 >= 1^1');

			t.equal(mc.tst._f.powGePow(1,-1,-1,1), true, '1^-1 >= 1^1');
			
			t.equal(mc.tst._f.powGePow(2,1,1,1), true, '2^1 >= 1^1');

			
			t.equal(mc.tst._f.andOr(false,true,false), false, 'false && true || false');
			
			t.equal(mc.tst._f.orAnd(true,false,true), true, 'true || false && true');
			
			
			t.equal(mc.tst._f.andParenOr(false,true,false), false, 'false && (true || false)');
			
			t.equal(mc.tst._f.orParenAnd(true,false,true), true, 'true || (false && true)');
			
			
			t.equal(mc.tst._f.notAnd(true,false), false, '!true && false');
			
			t.equal(mc.tst._f.notOr(false,true), true, '!false || true');

			if(typeof t.end === 'function') t.end();
		});
	});

	getFileContents('testCode/varAssign.smk', function(source) {
		test( "Assign", function( t ) {
			var mc = {};

			console.log(source);
			Smack.createPackage('tst', mc);
			Smack.compile('varAssign', source, mc);

			t.equal(mc.tst._f.assingAndCompare(1.1, 2.2), true, 'Variable assign');

			if(typeof t.end === 'function') t.end();
		});
	});

	getFileContents('testCode/ifElse.smk', function(source) {
		test( "If Else", function( t ) {
			var mc = {};

			console.log(source);
			Smack.createPackage('tst', mc);
			Smack.compile('ifElse', source, mc);

			t.equal(mc.tst._f.ifOneElseIfTwoElse(1), 1, 'If part of if else if else');

			t.equal(mc.tst._f.ifOneElseIfTwoElse(2), 2, 'Else if part of if else if else');

			t.equal(mc.tst._f.ifOneElseIfTwoElse(3), false, 'Else part of if else if else');

			t.equal(mc.tst._f.ifOneElse(1), 1, 'If part of if else');

			t.equal(mc.tst._f.ifOneElse(2), false, 'Else part of if else');

			if(typeof t.end === 'function') t.end();
		});
	});

	getFileContents('testCode/while.smk', function(source) {
		test( "While and exec()", function( t ) {
			var mc = {};

			console.log(source);
			Smack.createPackage('tst', mc);
			Smack.compile('while', source, mc);

			t.equal(mc.tst._f.addOneWhileLessThan(10000), 10000, 'While loop test');

			t.equal(mc.tst._f.callWithInput('tst.addOneWhileLessThan', [10000]), 10000, 'Exec with input test');
			
			t.equal(mc.tst._f.callWithoutInput('tst.returnTrue'), true, 'Exec without input test');

			if(typeof t.end === 'function') t.end();
		});
	});
			
	getFileContents('testCode/invoke.smk', function(source) {
		test( "Invoke", function( t ) {
			var mc = {};

			console.log(source);
			Smack.createPackage('tst', mc);
			Smack.compile('invoke', source, mc);

			t.equal(mc.tst._f.invokeAdd(1, 1), 2, 'Invokation with parameters');

			t.equal(mc.tst._f.invokeTrue(), true, 'Invokation without parameters');

			if(typeof t.end === 'function') t.end();
		});
	});
}