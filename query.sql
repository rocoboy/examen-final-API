
CREATE DATABASE examenfinal;
USE examenfinal;
-- todos los campos deben estar validados por la API
CREATE TABLE residente (
	id INT,
	nombre VARCHAR(50),
    apellido VARCHAR(50),
    dni INT,
    direccion VARCHAR(50),
    nrodepartamento INT
);

CREATE TABLE edificio (
	id INT,
	direccion VARCHAR(50)
);

-- solo puede haber una reserva en esa fecha y turno
-- el cliente solo puede reservar una vez por mes
CREATE TABLE Reserva ( 
	id INT,
	fecha VARCHAR(50),
    turno VARCHAR(50),  -- puede ser Tarde o Noche
    residente INT, -- por ahora guardamos el dni del cliente
    edificio VARCHAR(50) -- guardamos la dirección
);

INSERT INTO Reserva (id, fecha, turno, residente, edificio) values (0,"hoy","Tarde",1,"juan manso")