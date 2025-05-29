import { formatCurrency } from "../../scripts/utils/money.js";

describe('test suite: formatCurrency', () => {
    it('convert cents into dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95') ;
    }) ;

    it('convert cents into dollars', () => {
        expect(formatCurrency(0)).toEqual('0.00') ;
    }) ;

    it('convert cents into dollars', () => {
        expect(formatCurrency(1.1)).toEqual('0.01') ;
    }) ;

    it('convert cents into dollars', () => {
        expect(formatCurrency(1.6)).toEqual('0.02') ;
    }) ;
}) ;

