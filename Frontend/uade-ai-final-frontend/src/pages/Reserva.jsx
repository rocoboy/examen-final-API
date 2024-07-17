import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import { fetchAllEdificios } from '../services/edificios';
import { fetchAllFechas } from '../services/fechas';

export default function Reserva() {

    const turnos = ["Tarde", "Noche"];
    const edificios = fetchAllEdificios();
    const fechas = fetchAllFechas();
    
    const [edificio, setEdificio] = React.useState(-1);
    const [turno, setTurno] = React.useState(-1);
    const [fecha, setFecha] = React.useState(-1);
    const [mensaje, setMensaje] = React.useState("");
    const [residenteDatos, setResidenteDatos] = React.useState({
        nombre: "",
        apellido: "",
        dni: 0,
        direccion: "",
        nroDepartamento: ""
    });
    const navigate = useNavigate();

    const handleChangeEdificio = (event) => {
        setEdificio(event.target.value);
    };

    const handleChangeTurno = (event) => {
        setTurno(event.target.value);
    };

    const handleChangeFecha = (event) => {
        setFecha(event.target.value);
    };

    const reservar = () => {
        // enviamos la reserva con un POST y vemos que nos responde
        // si la respuesta es exitosa: 
        setMensaje(`${residenteDatos.nombre} ya reservaste con éxito!!`)
        // si la respuesta no lo es, decimos que hay un error y podemos determinar
        // segun el contenido de la respuesta que dato es incorrecto o no permitido
        // dado que puede estar ocupado el SUM, etc
    };

    const navigateReservas = () => {
      navigate("/");  
    };


    const handleChange = (e, name) => {
        const value= e.target.value
        setResidenteDatos({...residenteDatos, [name]: value})
        setMensaje("")
    }

    return (
      <Box sx={{ backgroundColor: "white" }}>
        <Card sx={{ minWidth: 500 }}>
            <CardContent>

                <Typography variant="h6" gutterBottom>
                    Datos de la reserva
                </Typography> 
                {/* desplegable de edificio */}
                <Box sx={{ margin: "20px" }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Edificio</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={edificio}
                        label="Edificio"
                        sx={{backgroundColor: "white"}}
                        onChange={handleChangeEdificio}
                    >
                        {
                            edificios.map((edificio, i) => {
                                return (
                                    <MenuItem value={i}>{edificio.direccion}</MenuItem>
                                );
                            })
                        }
                    </Select>
                </FormControl>
                </Box>
                
                {/* desplegable de la fecha */}
                <Box sx={{ margin: "20px" }}>
                    

                    <Typography sx={{color: "grey"}} gutterBottom>
                        Tomo fecha como numero dado que no llego con el tiempo
                    </Typography>  
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Fecha</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={fecha}
                            label="Fecha"
                            sx={{backgroundColor: "white"}}
                            onChange={handleChangeFecha}
                        >
                        {
                            fechas.map((fecha, i) => {
                                return (
                                    <MenuItem value={i}>{fecha}</MenuItem>
                                );
                            })
                        }
                        </Select>
                    </FormControl>
                </Box>
            
                {/* desplegable del turno */}
                <Box sx={{ margin: "20px" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Turno</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={turno}
                            label="Turno"
                            sx={{backgroundColor: "white"}}
                            onChange={handleChangeTurno}
                        >
                        {
                            turnos.map((turno, i) => {
                                return (
                                    <MenuItem value={i}>{turno}</MenuItem>
                                );
                            })
                        }
                        </Select>
                    </FormControl>
                </Box>

                <Box sx={{ margin: "20px" }}>
                    <Typography variant="h6" gutterBottom>
                        Datos del cliente
                    </Typography>    
                    <TextField fullWidth id="outlined-basic" label="Nombre" variant="outlined" value={residenteDatos.nombre}
                        onChange={(e)=>handleChange(e, "nombre")}
                        />
                    <TextField fullWidth id="outlined-basic" label="Apellido" variant="outlined"  value={residenteDatos.apellido}
                        onChange={(e)=>handleChange(e, "apellido")}
                    />
                    <TextField fullWidth id="outlined-basic" label="DNI" variant="outlined"  type="number" value={residenteDatos.dni != 0 ? residenteDatos.dni : ""}
                        onChange={(e)=>handleChange(e, "dni")}
                    />
                    <TextField fullWidth id="outlined-basic" label="Dirección" variant="outlined"  value={residenteDatos.direccion}
                        onChange={(e)=>handleChange(e, "direccion")}
                    />
                    <TextField fullWidth id="outlined-basic" label="Número de Departamento" variant="outlined" value={residenteDatos.nroDepartamento}
                        onChange={(e)=>handleChange(e, "nroDepartamento")}
                    />
                </Box>

                <Button variant="contained" onClick={reservar}>Crear Reserva</Button>
                <Button variant="contained" onClick={navigateReservas}>Ver reservas</Button>
            </CardContent>
            <CardActions>
                        {mensaje}
            </CardActions>
        </Card>
      </Box>
    );
  }