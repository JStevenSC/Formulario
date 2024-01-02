const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"steven123",
    database:"Empleados"

});

app.post("/create",(req ,res)=>{
    const nombre = req.body.nombre;
    const telefono = req.body.telefono;
    const telefonoMovil= req.body.telefonoMovil;
    const correo = req.body.correo;
    const bodega = req.body.bodega;
    const oficina = req.body.oficina;

    db.query('INSERT INTO empleadosaxity(nombre,telefono,telefonoMovil,correo,bodega,oficina) VALUES(?,?,?,?,?,?)',[nombre,telefono,telefonoMovil,correo,bodega,oficina],
    (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Empleado registrado con Exito")
        }
    });
    

});

app.put("/update",(req ,res)=>{
    const Id = req.body.Id;
    const nombre = req.body.nombre;
    const telefono = req.body.telefono;
    const telefonoMovil= req.body.telefonoMovil;
    const correo = req.body.correo;
    const bodega = req.body.bodega;
    const oficina = req.body.oficina;

    db.query('UPDATE empleadosaxity SET nombre=?,telefono=?,telefonoMovil=?,correo=?,bodega=?,oficina=? WHERE Id=?',[nombre,telefono,telefonoMovil,correo,bodega,oficina,Id],
    (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Empleado actualiado")
        }
    }); 
});



app.delete("/delete/:Id",(req ,res)=>{
    const Id = req.params.Id;

    db.query('DELETE FROM empleadosaxity WHERE Id=?',Id,
    (err, result)=>{
        if(err){
            console.groupCollapsed("error steven")
            console.log(err);
        }else{
            res.send("Empleado eLIMINADO CON EXITO")
        }
    }); 
});






app.get("/empleados",(req ,res)=>{   

    db.query('SELECT * FROM empleadosaxity',
    (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    });
    

});



app.listen(3001, ()=>{
    console.log("esta corriendo por 3001")

})