
    global.pagina =  "12345";
window.myvar = 123;
global.myvar = '"pepe"';
global.usuario = '"pepe"';
let myvar= 123;

_storeData = async () => {
  try {
    await AsyncStorage.setItem('TASKS', '123.');
  } catch (error) {
    // Error saving data
  }
};
