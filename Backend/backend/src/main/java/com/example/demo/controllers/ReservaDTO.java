package com.example.demo.controllers;

import java.sql.Date;

import lombok.Data;

@Data
public class ReservaDTO {
    private Date fecha;
    private String turno;
    private Integer residente;
    private String edificio;
}
