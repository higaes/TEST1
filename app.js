// Include express
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

// define server relate variables
const port = 3000

//movelist download
const dining = require('./restaurant.json')

// 讓app 跟者main為主要的handlebars 之後她會自己去接其他的handlebars 不用改
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//boostrap 套件 不用改
app.use(express.static('public'))



app.get('/', (req, res) => {

  // past the movie data into 'index' partial template
  //丟值進去 並改成變數movie 
  res.render('index', { dining: dining.results })  //渲染index.handlebars回去給main 瀏覽器
  //{{{ }}} 跟 {{ }} 的差別, 兩個大括號，則裡面的內容會被當作「純字串」,三個大括號 html
  // render 算繪 
})

app.get('/restaurants/:id', (req, res) => {
  console.log("hall", req.params.id)
  // 先篩選後，然後渲染進去單一網頁，再呈現在網頁上
  const diningfilter = dining.results.filter(restaurant => {
    return restaurant.id == req.params.id
    // 只用兩個 == 不要寫死
  })
  res.render('show', { dining: diningfilter[0] })  //渲染ind

})


app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})