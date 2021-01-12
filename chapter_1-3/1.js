//принимает 2 аргумента html элемент и место где
//должен отобразиться jsx

ReactDOM.render(
    <h1>Шерлок</h1>,
    //можно добавлять так а можно использовать переменную
    document.querySelector("#container")
)


//существует несколько способов создания компонента
//один из них - это создание класса
class HelloWorld extends React.Component {
    //добавим метод
    render(){
        //так компонент можно передавать аргумент
        return <p>hello container?{this.props.greetTarget}!</p>
    }
}

let destination = document.querySelector("#container2");
ReactDOM.render(
    //Для вызова используется тег с именем класса
    <div>
        {/*так выглядит передача аргумента в компонент*/}
        <HelloWorld greetTarget="1"/>
        <HelloWorld greetTarget="2"/>
        <HelloWorld greetTarget="3"/>
    </div> ,
    //можно добавлять так а можно
    destination
)

class Buttonify extends React.Component {
    render() {
        return(
            <div>
                <button type={this.props.behavior}>{this.props.
                    children}</button>
            </div>
        );
    }
}


ReactDOM.render(
    <div>
        <Buttonify behavior={"submit"}>Send Data</Buttonify>
    </div>,
    document.querySelector("#container3")
)

/*
тут внутри одного элемента создается несколько
 */



let Testdestination = document.querySelector("#root_cont");

ReactDOM.render(React.createElement(
    "div",
    null,
    <h1>Корневой элемент</h1>,
    React.createElement(
        "h1",
        null,
        "Первый вложенный элемент"
    ),

    React.createElement(
        "h2",
        null,
        "второй вложенный элемент"
    ),

    React.createElement(
        "h3",
        null,
        "третий вложенный элемент"
    ),

    React.createElement(
        "h4",
        null,
        "четвертый вложенный элемент"
    )

    ),
    //местоположение нового элемента
    Testdestination);