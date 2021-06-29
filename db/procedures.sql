USE company;

USE LENDERS

-- PRECEDIMIENTO AGREGAR O EDITAR PRODUCTO

DELIMITER $$

CREATE PROCEDURE `AddOrEditProducto` (
  IN _id INT,
  IN _name VARCHAR(45),
  IN _descripcion VARCHAR(45),
  IN _fotografia VARCHAR(45),
  IN _idCatalogo INT
)
BEGIN 
  IF _id = 0 THEN
    INSERT INTO producto (nom_producto, descripcion, fotografia, id_catalogo)
    VALUES (_name, _descripcion, _fotografia, _idCatalogo);

    SET _id = LAST_INSERT_ID();
  ELSE
    UPDATE producto
    SET
    nom_producto = _name,
    descripcion = _descripcion,
    fotografia = _fotografia,
    id_catalogo = _idCatalogo
    WHERE id_producto = _id;
  END IF;

  SELECT _id AS 'id';
END

$$