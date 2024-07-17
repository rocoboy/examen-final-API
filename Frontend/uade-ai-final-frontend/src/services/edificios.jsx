const edificios = [ 
    {
        "direccion" : "Juan Man 123"
    },
    {
        "direccion" : "Albarracin 223"
    }
];


// luego tendré que definirlo como asincronico
// y tomar datos desde el backend
export function fetchAllEdificios(){
    return edificios;
}