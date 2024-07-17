package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Reserva;

public interface ReservaRespository extends JpaRepository<Reserva, Long> {
}