const reservas = [
    {
        "id" : 1,
        "fecha" : "02-07-2024",
        "turno" : "Tarde",
        "residente" : 1,
        "edificio" : "Juan Man 123"
    },
    {
        "id" : 2,
        "fecha" : "02-09-2024",
        "turno" : "Noche",
        "residente" : 2,
        "edificio" : "Juan Man 123"
    },
    {
        "id" : 3,
        "fecha" : "12-07-2024",
        "turno" : "Tarde",
        "residente" : 1,
        "edificio" : "Juan Man 123"
    },
    {
        "id" : 4,
        "fecha" : "22-11-2024",
        "turno" : "Noche",
        "residente" : 2,
        "edificio" : "Albarracin 223"
    }
];


// luego tendré que definirlo como asincronico
// y tomar datos desde el backend
export function fetchAllReservas(){
    return reservas;
}