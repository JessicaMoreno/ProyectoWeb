
const express = require('express');
const router = express.Router();
const serverPath= __dirname;
const viewsPath = serverPath.replace('/server','/public');
const panesPath = serverPath.replace('/server','/public/ventanas');
const servicesViewPath = serverPath.replace('/server','/public/ventanas/servicios');
//serve ROUTES
router.get('/',function(req,res){
    res.sendFile(viewsPath + '/inicio.html');
});

 router.get('/Promociones.html', (req, res) => {
    res.sendFile(viewsPath + '/Promociones.html');
});
router.get('/Productos.html', (req, res) => {
    res.sendFile(viewsPath + '/Productos.html');
});

 router.get('/citas.html', (req, res) => {
    res.sendFile(viewsPath + '/citas.html');
});

 router.get('/nosotros.html', (req, res) => {
    res.sendFile(viewsPath + '/nosotros.html');
});

 router.get('/servicios.html', (req, res) => {
    res.sendFile(viewsPath + '/servicios.html');
});

 router.get('/paquetes.html', (req, res) => {
    res.sendFile(viewsPath + '/paquetes.html');
});
router.get('/login.html', (req, res) => {
    res.sendFile(viewsPath + '/login.html');
});
router.get('/contacto.html', (req, res) => {
    res.sendFile(viewsPath + '/login.html');
});

router.get('/manospies.html', (req, res) => {
    res.sendFile(viewsPath + '/manospies.html');
});
router.get('/inicio.html',function(req,res){
    res.sendFile(viewsPath + '/inicio.html');
});

router.get('/cabello.html',function(req,res){
    res.sendFile(panesPath + '/cabello.html');
});

router.get('/corporales.html',function(req,res){
    res.sendFile(panesPath + '/corporales.html');
});

router.get('/faciales.html',function(req,res){
    res.sendFile(panesPath + '/faciales.html');
});

router.get('/masajes.html',function(req,res){
    res.sendFile(panesPath + '/masajes.html');
});

router.get('/paquetefigura.html',function(req,res){
    res.sendFile(panesPath + '/paquetefigura.html');
});

router.get('/paquetelifting.html',function(req,res){
    res.sendFile(panesPath + '/paquetelifting.html');
});

router.get('/paquetemasaje.html',function(req,res){
    res.sendFile(panesPath + '/paquetemasaje.html');
});

router.get('/profaciales.html',function(req,res){
    res.sendFile(panesPath + '/profaciales.html');
});

router.get('/antiestres.html',function(req,res){
    res.sendFile(servicesViewPath + '/antiestres.html');
});

router.get('/cavitacion.html',function(req,res){
    res.sendFile(servicesViewPath + '/cavitacion.html');
});
router.get('/choco.html',function(req,res){
    res.sendFile(servicesViewPath + '/choco.html');
});
router.get('/cranberry.html',function(req,res){
    res.sendFile(servicesViewPath + '/cranberry.html');
});
router.get('/craneo.html',function(req,res){
    res.sendFile(servicesViewPath + '/craneo.html');
});

router.get('/cuello.html',function(req,res){
    res.sendFile(servicesViewPath + '/cuello.html');
});
router.get('/drenaje.html',function(req,res){
    res.sendFile(servicesViewPath + '/drenaje.html');
});
router.get('/envolturas.html',function(req,res){
    res.sendFile(servicesViewPath + '/envolturas.html');
});
router.get('/fango.html',function(req,res){
    res.sendFile(servicesViewPath + '/fango.html');
});
router.get('/frances.html',function(req,res){
    res.sendFile(servicesViewPath + '/frances.html');
});

router.get('/gel.html',function(req,res){
    res.sendFile(servicesViewPath + '/gel.html');
});
router.get('/hidratacion.html',function(req,res){
    res.sendFile(servicesViewPath + '/hidratacion.html');
});
router.get('/hindu.html',function(req,res){
    res.sendFile(servicesViewPath + '/hindu.html');
});
router.get('/impulsos.html',function(req,res){
    res.sendFile(servicesViewPath + '/impulsos.html');
});

router.get('/infantil.html',function(req,res){
    res.sendFile(servicesViewPath + '/infantil.html');
});

router.get('/laser.html',function(req,res){
    res.sendFile(servicesViewPath + '/laser.html');
});

router.get('/limpieza.html',function(req,res){
    res.sendFile(servicesViewPath + '/limpieza.html');
});

router.get('/limpieza.html',function(req,res){
    res.sendFile(servicesViewPath + '/limpieza.html');
});

router.get('/maderoterapia.html',function(req,res){
    res.sendFile(servicesViewPath + '/maderoterapia.html');
});

router.get('/manicureruso.html',function(req,res){
    res.sendFile(servicesViewPath + '/manicureruso.html');
});

router.get('/manicurespa.html',function(req,res){
    res.sendFile(servicesViewPath + '/manicurespa.html');
});

router.get('/maya.html',function(req,res){
    res.sendFile(servicesViewPath + '/maya.html');
});

router.get('/natural.html',function(req,res){
    res.sendFile(servicesViewPath + '/natural.html');
});

router.get('/pedicuresencillo.html',function(req,res){
    res.sendFile(servicesViewPath + '/pedicuresencillo.html');
});

router.get('/pedicurespa.html',function(req,res){
    res.sendFile(servicesViewPath + '/pedicurespa.html');
});

router.get('/piedras.html',function(req,res){
    res.sendFile(servicesViewPath + '/piedras.html');
});

router.get('/podal.html',function(req,res){
    res.sendFile(servicesViewPath + '/podal.html');
});
router.get('/prenatal.html',function(req,res){
    res.sendFile(servicesViewPath + '/prenatal.html');
});

router.get('/radio.html',function(req,res){
    res.sendFile(servicesViewPath + '/radio.html');
});

router.get('/relajante.html',function(req,res){
    res.sendFile(servicesViewPath + '/relajante.html');
});

router.get('/reposicion.html',function(req,res){
    res.sendFile(servicesViewPath + '/reposicion.html');
});

router.get('/retirado.html',function(req,res){
    res.sendFile(servicesViewPath + '/retirado.html');
});

router.get('/ultrasonido.html',function(req,res){
    res.sendFile(servicesViewPath + '/ultrasonido.html');
});
router.get('/vacumterapia.html',function(req,res){
    res.sendFile(servicesViewPath + '/vacumterapia.html');
});
router.get('/vino.html',function(req,res){
    res.sendFile(servicesViewPath + '/vino.html');
});

module.exports = router;