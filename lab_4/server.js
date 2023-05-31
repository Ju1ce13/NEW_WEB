var express = require("express"),
http = require("http"),
app = express(),
toDos =
[
  {
    "description": "Посмотреть список групп ИКТЗИ",
    "tags": [ "список", "ИКТЗИ" ]
  },

  {
    "description": "Посмотреть список групп ИАНТЭ",
    "tags": [ "список", "ИАНТЭ" ]
  },

  {
    "description": "Посмотреть список групп ИАЭП",
    "tags": [ "список", "ИАЭП" ]
  },

  {
    "description": "Посмотреть список групп ИРЭФ - ЦТ",
    "tags": [ "список", "ИРЭФ - ЦТ" ]
  },

  {
    "description": "Посмотреть список групп ФМФ",
    "tags": [ "список", "ФМФ" ]
  },

  {
    "description": "Посмотреть список групп ВШПИТ",
    "tags": [ "список", "ВШПИТ" ]
  },

  {
    "description": "Посмотреть список групп ИИЭиП",
    "tags": [ "список", "ИИЭиП" ]
  }
]

app.use(express.static(__dirname + "/client"));
http.createServer(app).listen(3000);

app.get("/todos.json", function (req, res) {
	res.json(toDos);
});

app.use(express.static(__dirname + "/client"));

app.use(express.urlencoded({ extended: true }));
app.post("/todos", function (req, res) { // сейчас объект сохраняется в req.body
	var newToDo = req.body;
	console.log(newToDo);
	toDos.push(newToDo);

	res.json({"message":"Вы размещаетесь на сервере!"}); // отправляем простой объект
});

