const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

async function promiseOutput(emosi) {
    let bioskopMarah = 0;
    let bioskopTidakMarah = 0;
    if (emosi === 'marah') {
        return await promiseTheaterIXX().then((value) => {
            value.forEach((array) => {
                if (array.hasil === emosi) {
                    bioskopMarah++;
                }
            });
            return promiseTheaterVGC();
        }).then(value => {
            value.forEach(array => {
                if (array.hasil === emosi) {
                    bioskopMarah++;
                }
            });
            return bioskopMarah;
        });

    } else if (emosi === 'tidak marah') {
        return await promiseTheaterIXX().then(value => {
            value.forEach(array => {
                if (array.hasil === emosi) {
                    bioskopTidakMarah++;
                }
            });
            return promiseTheaterVGC();
        }).then(value => {
            value.forEach(array => {
                if (array.hasil === emosi) {
                    bioskopTidakMarah++;
                }
            });
            return bioskopTidakMarah;
        });
    };

}
module.exports = {
    promiseOutput,
}