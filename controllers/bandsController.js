const db = require('../db/bands');
const LIST = db.list;

const bandsController = {

    // Listado de bandas
    index: function (req, res, next) {
        res.render('listadoBandas', {
            title: 'Bandas de música',
            bandas: LIST
        });
    },

    // Detalle por ID
    showBand: function (req, res, next) {

        const banda = LIST.find(b => b.id === Number(req.params.id));
        if (!banda) {
            return res.status(404).render('error', { message: 'No encontramos la banda.' });
        }
        res.render('detalleBanda', { title: banda.nombre, banda });
    },

    // Lista por género
    showGender: function (req, res, next) {

        const genero = (req.params.genero || '').toLowerCase();
        const bandas = LIST.filter(b => (b.genero || '').toLowerCase() === genero);
        
        if (bandas.length === 0) return res.status(404).render('porGenero', { genero, bandas: [] });
        res.render('porGenero', { genero, bandas });
    },
}

module.exports = bandsController;
