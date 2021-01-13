# Тут разбирается применение CSS в реакте #
CSS стили применяются двумя способами с использованием CSS файлов
и при помощи объявления переменных внутри самого React
## через классы CSS ##
```
.letter {
    padding: 10px;
    margin: 10px;
    background-color: gold;
    color: #333;
    display: inline-block;
    font-family: monospace;
    font-size: 32px;
    text-align: center;
}
/*применение стиля ко всем вложенным дивам
без класса также если класс неизвестен
применится этот стиль
*/
div div div {
    padding: 10px;
    margin: 10px;
    background-color: aqua;
    color: #333;
    display: inline-block;
    font-family: monospace;
    font-size: 32px;
    text-align: center;
}
```
*В реакте прописывается свойство className tk class
зарезервированное слово*
```
    class Letter extends React.Component{
        render(){
            return (
                <div className = "letter">
                    {this.props.children}
                </div>
            );
        }
    }
```

##второй способ##
Позволяет использовать CSS внутри js для этого нужно создать переменную
в которой будут описаны свойства. Нужно учитывать то, что имена свойств
необходимо менять по некоторым правилам:

* заменять "-" на большие буквы
* ставить "," вместо ";"
* свойства помещать в "" (которые не являются числами)

Чтобы прописать свое свойство, нужно определить его
через this.props.{prop_name}, после этого задавать
его в свойствах компонента

```
backgroundColor: this.props.bgcolor,
<ReactRenderStyles bgcolor={"red"}>A</ReactRenderStyles>
```

```
class ReactRenderStyles extends React.Component{
        render(){
            let letterStyle = {
                padding: 10,
                margin: 10,
                //здесь действует правило переименования
                //- заменяется на заглавную букву
                backgroundColor: this.props.bgcolor,
                color: "#333",
                display: "inline-block",
                fontFamily: "monospace",
                fontSize: 32,
                textAlign: "center"
            }
            return (
                //так можно использовать свой класс для css оформления
                //и не создавать отдельных правил в файле
                <div className="d" style={letterStyle} >
                    {this.props.children}
                </div>
            )
        }
    }

    ReactDOM.render(
        <div>
            <ReactRenderStyles bgcolor={"red"}>A</ReactRenderStyles>
            <ReactRenderStyles>B</ReactRenderStyles>
            <ReactRenderStyles>C</ReactRenderStyles>
        </div>,
        document.getElementById("containerD")

    )
```