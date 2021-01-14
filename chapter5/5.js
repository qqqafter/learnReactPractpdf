//для начала нужно разбить страницу на компоненты
//и реализовать их в виде классов
//обратить внимание на важность затенения (оно
//явно делает более приятным просмотр страницы/элемента
//чувство как будто немного сглаживает

/*
    суть
        внутри одного дива располагаем два
        первый занимает 150 из 200 px
        второй оставшиеся 50
        так как в css не задается правило
        расположения то все остается по умолчанию
 */
"use strict";

class Square extends React.Component {
    render() {
        let squareStyle = {
            height: 150,
            backgroundColor: this.props.bgcolor
        };
        return (
            <div style={squareStyle}>

            </div>
        )
    }
}

class Label extends React.Component {
    render() {
        let labelStyle = {
            fontFamily: "sans-serif",
            fontWeight: "bold",
            padding: 13,
            margin: 0
        };
        return (
            <p style={labelStyle}>{this.props.bgcolor}</p>
        );
    }
}

class Card extends React.Component {
    render() {
        let cardStyle = {
            height: 200,
            width: 150,
            padding: 0,
            marginBottom: 15,
            //думаю так можно задавать цвет по умолчанию
            backgroundColor: "#FFF",
            boxShadow: "0px 0px 17px #666"
        };

        return (
            <div style={cardStyle}>
                <Square bgcolor={this.props.bgcolor}/>
                <Label  bgcolor={this.props.bgcolor} />
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Card  bgcolor={"#241242"}/>
        <Card  bgcolor={"#784512"}/>
        <Card  bgcolor={"#3156DD"}/>
    </div>,
    document.querySelector("#container")
);