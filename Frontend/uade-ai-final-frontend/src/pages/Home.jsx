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
import { fetchAllReservas } from '../services/reservas';

export default function Home() {

    const navigate = useNavigate();
    const reservas = fetchAllReservas();

    const navigateReservar = () => {
        navigate("/reservar");  
    };

    return (
        <Box>
            {
                reservas.map((reserva) => {
                    return(
                        <Card sx={{ minWidth: 275, margin : "20px" }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    <b>ID Reserva: </b> {reserva.id}
                                </Typography>
                                <Typography variant="h6" component="div">
                                    <b>Fecha: </b> {reserva.fecha}
                                </Typography>
                                <Typography variant="h6" component="div">
                                    <b>Turno: </b> {reserva.turno}
                                </Typography>
                                <Typography variant="h6" component="div">
                                    <b>Id Residente: </b> {reserva.residente}
                                </Typography>
                                <Typography variant="h6" component="div">
                                    <b>Edificio: </b> {reserva.edificio}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Ver mas</Button>
                            </CardActions>
                        </Card>
                    );
                })
            }
            <Box>
                <Button variant="contained" onClick={navigateReservar}>Reservar</Button>

            </Box>
        </Box>
    );
}