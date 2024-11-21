const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

// Cấu hình thư mục tĩnh 'public'
app.use(express.static(path.join(__dirname, 'public')));
// http logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({
  extname: '.hbs'
})); // Sử dụng engine từ express-handlebars
app.set('view engine', 'hbs'); // Chỉ định view engine là handlebars
app.set('views', path.join(__dirname,'resources/views')) // Đảm bảo thư mục chứa các file .handlebars là 'views'

app.get('/', (req, res) => {
   res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})


// app.get('/', (req, res) => {
//   return res.send(`
//     <h1 style="color:red;">Hello World!</h1>
//     `)
// })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
