"use strict";


class Display extends React.Component {
    render() {
        //свойства передаются и с ними можно работать как обычно
        if (this.props.num === "3.14"){
            console.log(this.props.color)
        }
        return (
            <div>
                <p>{this.props.color}</p>
                <p>{this.props.num}</p>
                <p>{this.props.size}</p>
            </div>
        );
    }
}

class Label extends React.Component {
    render() {

        return (
            <Display {...this.props}/>
        );
    }
}

class Shirt extends React.Component {
    render() {
        return (
            <div>
                {/*так мы передаем все свойства в потомка*/}
                <Label {...this.props}/>
            </div>
        );
    }
}
ReactDOM.render(
    <div>
        <Shirt color="steelblue" num="3.14" size="medium" />
    </div>,
    document.querySelector("#container")
);

