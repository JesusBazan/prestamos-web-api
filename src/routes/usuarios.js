const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database.js');

// GET all usuarios
router.get('/usuarios', (req, res) => {
    mysqlConnection.query('SELECT * FROM usuario', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// GET An usuario
router.get('/buscarUsuario/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM usuario WHERE id_usuario = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// DELETE An usuario
router.delete('/eliminarUsuario/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM usuario WHERE id_usuario = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Usuario Deleted' });
        } else {
            console.log(err);
        }
    });
});

// INSERT An usuario
router.post('/insertarUsuario', (req, res) => {
    const { id, correo, contraseña, foto_perfil, nombre, apellidoP, apellidoM, telefono, img_identificacion, codigo_personal, codigo_recomendacion, fecha_registro, id_rol_usuario } = req.body;
    console.log(id, correo, contraseña, foto_perfil, nombre, apellidoP, apellidoM, telefono, img_identificacion, codigo_personal, codigo_recomendacion, fecha_registro, id_rol_usuario);
    const query = `
    SET @id = ?;
    SET @correo = ?;
    SET @contraseña = ?;
    SET @foto_perfil = ?;
    SET @nombre = ?;
    SET @apellidoP = ?;
    SET @apellidoM = ?;
    SET @telefono = ?;
    SET @img_identificacion = ?;
    SET @codigo_personal = ?;
    SET @codigo_recomendacion = ?;
    SET @fecha_registro = ?;
    SET @id_rol_usuario = ?;
    CALL AddOrEditProducto(@id, @correo, @contraseña, @foto_perfil, @nombre, @apellidoP, @apellidoM, @telefono, @img_identificacion, @codigo_personal, @codigo_recomendacion, @fecha_registro, @id_rol_usuario);
  `;
    mysqlConnection.query(query, [id, correo, contraseña, foto_perfil, nombre, apellidoP, apellidoM, telefono, img_identificacion, codigo_personal, codigo_recomendacion, fecha_registro, id_rol_usuario], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Usuario Saved' });
        } else {
            console.log(err);
        }
    });
});

// UPDATE An usuario
router.put('/actualizarUsuario/:id', (req, res) => {
    const { nombre, descripcion, fotografia, idCatalogo } = req.body;
    const { id } = req.params;
    const query = `
    SET @id = ?;
    SET @nombre = ?;
    SET @descripcion = ?;
    SET @fotografia = ?;
    SET @idCatalogo = ?;
    CALL AddOrEditProducto(@id, @nombre, @descripcion, @fotografia, @idCatalogo);
  `;
    mysqlConnection.query(query, [id, nombre, descripcion, fotografia, idCatalogo], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Producto Updated' });
        } else {
            console.log(err);
        }
    });
});

module.exports = router;