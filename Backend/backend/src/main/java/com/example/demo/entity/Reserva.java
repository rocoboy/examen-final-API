package com.example.demo.entity;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Reserva {
    @Id
    private Long id;
    private Date fecha;
    private String turno;
    private Integer residente;
    private String edificio;
}
