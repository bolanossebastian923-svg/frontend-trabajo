const express=require('express')
const cors=require('cors')
const app=express();
const PORT=3000
app.use(express.json());

app.use(cors({
    origin:"http://localhost:5173"
}))

app.use((req, res, next)=>{
    console.log(`[LOG] Metodo: ${req.method} | ruta solicitada: ${req.url}`);
    next();
})

app.get('/inicio',(req,res)=>{
    res.json({"mensaje de bienvenida":"bienvenida a mi aplicacion de api"})
})

app.get('/informacion',(req,res)=>{
    res.json({
        "nombre":"aplicacion de software",
        "descripcion":"es una aplicacion de pruebas para entender el funcionamiento de rutas",
        "autor":"desarrollaror de backend y frontend"
    })
})

app.post('/solicitudes', (req, res) => {
    const { nombre, apellido, correo } = req.body;

    if (!nombre || !apellido || !correo) {
        return res.status(400).json({
            error: "datos incompletos",
            mensaje: "los campos nombre, apellido y correo son obligatorios"
        });
    }

    return res.status(201).json({
        estado: "Exito",
        mensaje: "la solicitud fue recibida correctamente",
        datosRecibidos: {
            nombre,
            apellido,
            correo
        }
    });
});

app.listen(PORT,()=>{
    console.log("servidor ejecutandoce correctamente")
})