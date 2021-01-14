
let listOfLetters = [
    "A", "B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
]

let listOfColors = [
    "red", "blue","green","gold"
]

class Alph extends React.Component{
    render(){
        let alphaS = {
            margin: 10,
            padding: 10,
            display: "inline-block",
            backgroundColor: this.props.bgcolor,
            fontSize: 42,
            height: 40,
            width: 35,
            align: "center",
        }
        return (
            <div style={alphaS}>
                {this.props.children}
            </div>
        );
    }
}



class Alphabet extends React.Component{
    render(){

        let all =[]
            //https://stackoverflow.com/questions/45784479/create-a-bunch-of-divs-via-an-array
        //TODO
        // тут сделать свойство для рандомного цвета
        // а также придумать как поместить это все в отдельный div
        // например по 5 букв

        // all = listOfLetters.map(letter => <div style={alphaS}>{letter}</div>)


        let i = 0

        for (let letter in listOfLetters) {
          i++
          let E = getRandomColor()

          all.push(<Alph key={letter} bgcolor ={E} >{listOfLetters[letter]}</Alph>)
          if (i % 5 == 0) {
              all.push(<div key={-letter}></div>)
          }
        }

        return (
            <div>
                {all}
            </div>
        )
    }
}

function getRandomColor(){
    return listOfColors[randomInteger(0,listOfColors.length - 1)]
}

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}


ReactDOM.render(
    <Alphabet/>,
    document.querySelector("#root")
)
