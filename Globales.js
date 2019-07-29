
global.pagina =  "12345";
window.myvar = 123;
global.myvar = '';
global.usuario = '';
global.id = '0';
global.email = '';
global.rol = '';
global.edad = '';
global.completado = '';
global.detectado = '';
global.fecha = '';
global.diagnostico = '';
global.nav = '';

global.idusuario = '';

global.ausuario = ' ';
global.aid = '0';
global.aemail = '';
global.arol = '';
global.aedad = '';
global.acompletado = '';
global.adetectado = '';
global.afecha = '';
global.adiagnostico = '';

let myvar= 123;

_storeData = async () => {
  try {
    await AsyncStorage.setItem('TASKS', '123.');
  } catch (error) {
    // Error saving data
  }
};
