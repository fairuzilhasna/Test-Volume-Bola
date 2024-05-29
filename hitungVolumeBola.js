function hitungVolumeBola (Pi, r) {
    if (r === undefined || r === null) throw 'Parameter r harus diisi';

    if (typeof r !== 'number') throw 'Parameter r harus berupa angka';
    if (typeof Pi !== 'number') throw 'Parameter Pi harus berupa angka';
    if (Pi !== 3.14 && Pi !== 22/7) throw 'Pi harus bernilai 3.14 atau 22/7';

    const hasil = 4/3 * Pi * r * r * r;
    return (hasil);
}

export default hitungVolumeBola