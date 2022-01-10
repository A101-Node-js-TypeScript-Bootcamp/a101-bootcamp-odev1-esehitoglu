const express = require('express');
const app = express();
app.get('/', (req, res) => {
 res.send('<h1> Merhaba Dünya! 498 </h1>');
});
app.listen(3000, () => {
 console.log('Uygulama çalıştırıldı...');
});