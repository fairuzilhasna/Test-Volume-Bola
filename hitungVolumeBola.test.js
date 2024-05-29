import { expect } from "chai";
import hitungVolumeBola from "./HitungVolumeBola.js";

describe ('Unit test function hitungVolumeBola', function () {
    //Positif
    it ('Hitung Volume Bola dengan parameter yang valid', function () {
        const Pi = 3.14;
        const r = 7;

        const result = hitungVolumeBola(Pi, r);
        expect(result).to.equal(1436.0266666666666);
    })

    //Negatif
    it ('Hitung Volume Bola dengan nilai Pi yang salah', function () {
        const Pi = 3;
        const r = 7;

        const result = function() {
            hitungVolumeBola(Pi, r)
        };
        expect(result).to.throw('Pi harus bernilai 3.14 atau 22/7');
    })

    it ('Hitung Volume Bola dengan parameter r berupa string', function () {
        const Pi = 3.14;
        const r = '7';

        const result = function () { 
            hitungVolumeBola(Pi, r)
        };
        expect(result).to.throw('Parameter r harus berupa angka');
    })

    it ('Hitung Volume Bola dengan parameter r berupa string', function () {
        const Pi = 3.14;

        const result = function () {
            hitungVolumeBola(Pi)
        };
        expect(result).to.throw('Parameter r harus diisi');
    })
})