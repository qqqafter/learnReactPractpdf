## Передача свойств ##
Передача свойств однонаправленная, т.е свойство
можно передать только от родителя к потомку, это
может вызывать проблемы, если имеется несколько 
вложенных компонентов. 
```
class Display extends React.Component {
render() {
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
    <Display color={this.props.color}
        num={this.props.num}
        size={this.props.size}/>
    );
    }
}

class Shirt extends React.Component {
    render() {
        return (
            <div>
                <Label color={this.props.color}
                       num={this.props.num}
                       size={this.props.size}/>
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
```

Для того чтобы передать свойства компоненту Display
в предыдущих двух классах мы полностью прописывали 
все свойства, этого можно избежать применив
*оператор расширения*
Вместо такой записи мы можем применить 
```
class Shirt extends React.Component {
    render() {
        return (
            <div>
                <Label color={this.props.color}
                       num={this.props.num}
                       size={this.props.size}/>
            </div>
        );
    }
}
```
такую, из достоинств мы не должны менять код
в промежуточных узлах если перестали использовать
какое-либо свойство (или добавили новое), из минусов
такая передача параметров может негативно сказаться 
на производительности, т.к. обновление свойства
приведет к обновлению каждого компонента на
пути его следования





```
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
```
