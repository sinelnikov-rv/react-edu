var my_news = [
    {
        author: 'Саша Печкин',
        text: 'В четверг, четвертого числа...'
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
    }
];

var News = React.createClass({
        render: function() {
            var data = this.props.data;
            var newsTemplate;
            if (data.length>0){
                newsTemplate = data.map(function(item, index) {
                return (
                    <div key={index}>
                    <p className="news__author">{item.author}:</p>
            <p className="news__text">{item.text}</p>
        </div>
)
})
} else {
    newsTemplate = <p>no news</p>
}
return (
    <div className="news">
    {newsTemplate}
    <strong>Всего новостей: {data.length}</strong>
    </div>
);
}
});


var Comments = React.createClass({
    render: function() {
        return (
            <div className="comments">
                Нет новостей, нечего комментировать.
            </div>
        );
    }
});

var App = React.createClass({
    render: function() {
        return (
            <div className="app">
            Всем привет, я компонент App!
        <News data={my_news} /> {/*добавили свойство data */}
    <Comments />
        </div>
        );
    }
});
ReactDOM.render(
<App />,
    document.getElementById('root')
);
