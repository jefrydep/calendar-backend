const { Schema, model } = require('mongoose')


const EventSchema = Schema({
    title: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required:true
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
})

//retiramos la version de documento y quitamos el guion bajo de id
EventSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})

module.exports = model('Evento', EventSchema)