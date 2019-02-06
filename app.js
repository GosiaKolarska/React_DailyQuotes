class Draw extends React.Component {
  state = {
    quotes: [
      'Nie bój się dużego kroku. Nie pokonasz przepaści dwoma małymi. - David Loyd George',
      'Nigdy nie rezygnuj z tego, o czym nie możesz przestać myśleć nawet na jeden dzień. - Winston Churchill',
      'Wszystko jest możliwe. Niemożliwe wymaga po prostu więcej czasu. - Dan Brown',
      'Jeśli chcesz mieć coś, czego nie masz, musisz zacząć robić rzeczy, których nie robisz. - Mateusz Grzesiak',
      'Życie zaczyna się tam gdzie kończy się lęk. - Osho',
      'Z uśmiechem na twarzy człowiek podwaja swoje możliwości. - przysłowie japońskie ',
      'Prawdziwy błąd to taki, z którego nie wyciągamy żadnych wniosków. - John Powell',
      'Jeśli możesz sobie coś wymarzyć, możesz też to zrobić. - Walt Disney',
      'Jedyną drogą do tworzenia wielkich rzeczy, jest kochanie tego, co się robi. - Steve Jobs',
      'Kiedy łamiesz zasady, łam je mocno i na dobre. - Terry Pratchett',
      'Poświęcaj tyle czasu na ulepszanie siebie, byś nie miał go na krytykę innych. - Christian Larson',
      'Zawsze bądź pierwszorzędną wersją siebie, zamiast być kiepską kopią kogoś innego. -Judy Garland',
      'Najcenniejszych rzeczy w życiu nie nabywa się za pieniądze. - Albert Einstein'
    ],
    quote: null,
    value: ''
  }

  handleShowQuote = () => {
    const index = Math.floor(Math.random() * this.state.quotes.length)
    this.setState({
      quote: this.state.quotes[index]
    })
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleAddQuote = () => {
    if (this.state.value === '') return alert('Brak tekstu, wpisz coś :)')
    const quotes = [...this.state.quotes]
    quotes.push(this.state.value)
    this.setState({
      quotes,
      value: '',
    })
    alert(`Cytat dodany, dzięki! ❤`)
  }
  render() {
    return (
      <div className="container">
        <div className="content-top">
          <h1>Wylosuj cytat na dziś:</h1>
          <button className="btn btn-showQuote" onClick={this.handleShowQuote}>⁕ Losuj! ⁕</button>
          {this.state.quote ? <blockquote>{this.state.quote}</blockquote> : null}
        </div>
        <div className="content-bottom">
          <h2>Znasz jakiś super cytat? Podziel się! ☺</h2>
          <input
            type="text"
            placeholder="✎"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
          <button className="btn btn-addQuote"
            onClick={this.handleAddQuote}
          >Dodaj cytat</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Draw />, document.getElementById('root'))