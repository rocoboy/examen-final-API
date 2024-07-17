package com.example.demo.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Reserva;
import com.example.demo.repository.ReservaRespository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("reservas")
public class DemoController {

  private ReservaRespository reservaRespository;

  // obtengo todas las reservas
  @GetMapping
  public List<Reserva> obtenerReservas() {
    return reservaRespository.findAll();
  }

  @PostMapping("")
  public String cargarReserva(ReservaDTO reserva) {

    // debemos obtener la reserva y validar que no exista ya por la condicion
    // de que no este reservado ya y que el cliente no pueda reservar 
    // si ya reservo el ultimo mes
      Reserva nuevaReserva = new Reserva()
      nuevaReserva.setEdificio(reserva.getEdificio());
      nuevaReserva.setFecha(reserva.getFecha());
      nuevaReserva.setResidente(reserva.getResidente());
      nuevaReserva.getTurno(reserva.getTurno());
      return entity;
  }

}
