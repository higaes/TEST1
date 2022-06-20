//This is main program __main__。
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
app.set('view engine', 'handlebars')   //view folder頁面 handlebars後翠頁面

//boostrap 套件 不用改
app.use(express.static('public'))


// restaurant url main 
app.get('/', (req, res) => {

  // past the movie data into 'index' partial template
  //丟值進去 並改成變數movie 
  res.render('index', { dining: dining.results })  //渲染index.handlebars回去給main 瀏覽器
  //{{{ }}} 跟 {{ }} 的差別, 兩個大括號，則裡面的內容會被當作「純字串」,三個大括號 html
  // render 算繪 
})

//按下後導航到detail顯 function
app.get('/restaurants/:id', (req, res) => {
  console.log("hall", req.params.id)
  // 先篩選後，然後渲染進去單一網頁，再呈現在網頁上
  const diningfilter = dining.results.filter(restaurant => {
    return restaurant.id == req.params.id
    // 只用兩個 == 不要寫死
  })
  console.log(diningfilter[0])
  res.render('show', { dining: diningfilter[0] })  //渲染ind

})

// 搜索頁面 function
app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const diningFilter = dining.results.filter(hall => {
    if (hall.name.toLowerCase().includes(keyword)) {
      console.log(hall)
      return hall
    }
    if (hall.category.toLowerCase().includes(keyword)) {
      console.log(hall)
      return hall
    }
  })
  console.log('req.query', req.query)
  res.render('index', { dining: diningFilter })  //render 至index.handlebars
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
