const Type = {
    'YOUTUBE': 'youtube',
    'TRINKET': 'trinket',
    'PRESENTATION': 'presentation',
    'TYNKER': 'tynker',
    'FREE': 'free'
}

const Command = {
    'DEF': ['def', 'def _:'],
    'FOR': ['for', 'for _ in range(1):'],
    'WHILE': ['while', 'while _:'],
    'IF': ['if', 'if _:'],
    'ELSE': ['else', 'else:'],
    'ELIF': ['elif', 'elif _:'],
    'FORWARD': ['forward()', 'forward()'],
    'BACKWARD': ['backward()', 'backward()'],
    'LEFT': ['left()', 'left()'],
    'RIGHT': ['right()', 'right()'],
    'GOTO': ['goto()', 'goto()'],
    'PENUP': ['penup()', 'penup()'],
    'PENDOWN': ['pendown()', 'pendown()'],
    'DOT': ['dot()', 'dot()'],
    'CIRCLE': ['circle()', 'circle()'],
    'PENSIZE': ['pensize()', 'pensize()'],
    'FILLCOLOR': ['fillcolor()', 'fillcolor()'],
    'COLOR': ['color()', 'color()'],
    'BEGINFILL': ['begin_fill()', 'begin_fill()'],
    'ENDFILL': ['end_fill()', 'end_fill()'],
    'ISONFRUIT': ['isOnFruit()', 'isOnFruit()'],
    'EATFRUIT': ['eatFruit()', 'eatFruit()'],
    'PATHAHEAD': ['pathAhead()', 'pathAhead()'],
    'PATHTOTHELEFT': ['pathToTheLeft()', 'pathToTheLeft()'],
    'PATHTOTHERIGHT': ['pathToTheRight()', 'pathToTheRight()'],
    'PRINT': ['print()', 'print()'],
    'INPUT': ['input()', 'input()'],
}

const Database = {
    '1.3': {
        'desc': 'Comandos e sequências',
        'atividades': [
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/a1729173d9?start=result',
                'commands': [Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT]
            }
        ]
    },

    '2.3': {
        'desc': 'Depuração',
        'atividades': [
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/b7217553ea?start=result',
                'commands': [Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT]
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/927ee6940f?start=result',
                'commands': [Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT]
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/03ebceacbe?start=result',
                'commands': [Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT]
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/2af431f561?start=result',
                'commands': [Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT]
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/be451ae882?start=result',
                'commands': [Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT]
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/401add06bd?start=result',
                'commands': [Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT]
            },
        ]
    },

    '3.2': {
        'desc': 'Sistema de coordenadas cartesianas',
        'atividades': [
            {
                'type': Type.YOUTUBE, // trinket, presentation, youtube
                'content': 'https://www.youtube.com/embed/hasrat8DfJA',
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/1c143f87f8?start=result',
                'commands': []
            },
            {
                'type': Type.TYNKER, // trinket, presentation, youtube
                'content': '//www.tynker.com/ide/embedded?p=60be0f642db47e09cf3f9e81&controls=false&autostart=false',
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/ee57430da8?start=result',
                'commands': [Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT, Command.GOTO, Command.PENUP, Command.PENDOWN, Command.PENSIZE]
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/f9865c6c75?start=result',
                'commands': [Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT, Command.GOTO, Command.PENUP, Command.PENDOWN, Command.PENSIZE,Command.CIRCLE, Command.DOT]
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/fad5396a5c?start=result',
                'commands': [Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT, Command.GOTO, Command.PENUP, Command.PENDOWN, Command.PENSIZE,Command.CIRCLE, Command.DOT, Command.FILLCOLOR, Command.BEGINFILL, Command.ENDFILL]
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/a4501c1ceb?start=result',
                'commands': [Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT, Command.GOTO, Command.PENUP, Command.PENDOWN, Command.PENSIZE,Command.CIRCLE, Command.DOT, Command.FILLCOLOR, Command.BEGINFILL, Command.ENDFILL]
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/e3a80c550b?start=result',
                'commands': [Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT, Command.GOTO, Command.PENUP, Command.PENDOWN, Command.PENSIZE,Command.CIRCLE, Command.DOT, Command.FILLCOLOR, Command.BEGINFILL, Command.ENDFILL]
            },
        ]
    },

    '3.3': {
        'desc': 'Loop for',
        'atividades': [
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/fe5cc513d5?start=result',
                'commands': [Command.FOR, Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT, Command.GOTO, Command.PENUP, Command.PENDOWN, Command.PENSIZE, Command.COLOR, Command.FILLCOLOR]
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/5c0f705383?start=result',
                'commands': [Command.FOR, Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT, Command.GOTO, Command.PENUP, Command.PENDOWN, Command.PENSIZE, Command.COLOR, Command.FILLCOLOR]
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/ceaa330c74?start=result',
                'commands': [Command.FOR, Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT, Command.GOTO, Command.PENUP, Command.PENDOWN, Command.PENSIZE, Command.COLOR, Command.FILLCOLOR]
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/299b34013b?start=result',
                'commands': [Command.FOR, Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT, Command.GOTO, Command.PENUP, Command.PENDOWN, Command.PENSIZE, Command.COLOR, Command.FILLCOLOR]
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/88666fa5b3?start=result',
                'commands': [Command.FOR, Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT, Command.GOTO, Command.PENUP, Command.PENDOWN, Command.PENSIZE, Command.COLOR, Command.FILLCOLOR]
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/eab88192b4?start=result',
                'commands': [Command.FOR, Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT, Command.GOTO, Command.PENUP, Command.PENDOWN, Command.PENSIZE, Command.COLOR, Command.FILLCOLOR]
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/753b8c4e59?start=result',
                'commands': [Command.FOR, Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT, Command.GOTO, Command.PENUP, Command.PENDOWN, Command.PENSIZE, Command.COLOR, Command.FILLCOLOR]
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/b4c80f1b12?start=result',
                'commands': [Command.FOR, Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT, Command.GOTO, Command.PENUP, Command.PENDOWN, Command.PENSIZE, Command.COLOR, Command.FILLCOLOR]
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/abec8081d6?start=result',
                'commands': [Command.FOR, Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT, Command.GOTO, Command.PENUP, Command.PENDOWN, Command.PENSIZE, Command.COLOR, Command.FILLCOLOR]
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/5e3f70af13?start=result',
                'commands': [Command.FOR, Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT, Command.GOTO, Command.PENUP, Command.PENDOWN, Command.PENSIZE, Command.COLOR, Command.FILLCOLOR]
            },
            
        ]
    },

    '3.4': {
        'desc': 'Funções',
        'atividades': [
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/0169d53b45?start=result',
                'commands': [Command.FOR, Command.DEF, Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT, Command.GOTO, Command.PENUP, Command.PENDOWN]
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/b331d58987?start=result',
                'commands': [Command.FOR, Command.DEF, Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT, Command.GOTO, Command.PENUP, Command.PENDOWN]
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/ef188042d2?start=result',
                'commands': [Command.FOR, Command.DEF, Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT, Command.GOTO, Command.PENUP, Command.PENDOWN]
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/2be390c916?start=result',
                'commands': [Command.FOR, Command.DEF, Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT, Command.GOTO, Command.PENUP, Command.PENDOWN]
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/c70d7ff988?start=result',
                'commands': [Command.FOR, Command.DEF, Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT, Command.GOTO, Command.PENUP, Command.PENDOWN]
            },
        ]
    },

    '3.5': {
        'desc': 'Entrada e saída de dados',
        'atividades': [
            {
                'type': Type.FREE, // trinket, presentation, youtube
                'content': (<iframe src="https://py3.codeskulptor.org/#user306_BcB2sGyVPHivaGh.py" width="100%" height="auto" frameBorder="0" marginWidth="0" marginHeight="0" allowFullScreen></iframe>),
                'commands': [Command.PRINT, Command.INPUT]
            },
        ]
    },

    '3.6': {
        'desc': 'Revisão',
        'atividades': [
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/1e0a609fb7?start=result',
                'commands': [Command.FOR, Command.DEF, Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT, Command.GOTO, Command.PENUP, Command.PENDOWN]
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/51c766bd3f?start=result',
                'commands': [Command.FOR, Command.DEF, Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT, Command.GOTO, Command.PENUP, Command.PENDOWN]
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/d6658d8e01?start=result',
                'commands': [Command.FOR, Command.DEF, Command.FORWARD, Command.BACKWARD, Command.LEFT, Command.RIGHT, Command.GOTO, Command.PENUP, Command.PENDOWN]
            },
        ]
    },

    '4.1': {
        'desc': 'Código condicional',
        'atividades': [
            {
                'type': Type.PRESENTATION, // trinket, presentation, youtube
                'content': 'https://docs.google.com/presentation/d/e/2PACX-1vSjXG4OQDFdJLK82VWRJ1QQ-aW5EXTJxGPixAwCJYuq3az-S_2-UA0ZYpccewhSO-BoGKSGqRlSzS7B/embed?start=true&loop=false&delayms=10000',
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/6989af32cc?start=result',
                'commands': [Command.IF, Command.ELSE, Command.FOR, Command.DEF, Command.FORWARD, Command.LEFT, Command.RIGHT]
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/629185c944?start=result',
                'commands': [Command.IF, Command.ELSE, Command.FOR, Command.DEF, Command.FORWARD, Command.LEFT, Command.RIGHT]
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/261b9321a4?start=result',
                'commands': [Command.IF, Command.ELSE, Command.FOR, Command.DEF, Command.FORWARD, Command.LEFT, Command.RIGHT]
            },
            {
                'type': Type.TRINKET, // trinket, presentation, youtube
                'content': 'https://trinket.io/embed/python/4912844163?start=result',
                'commands': [Command.IF, Command.ELSE, Command.FOR, Command.DEF, Command.FORWARD, Command.LEFT, Command.RIGHT]
            },
        ]
    },
    
}


class Header extends React.Component {

    constructor(props) {
        super(props)         
    }

    render() {
        const {aula, atividade, baseUrl} = this.props.params

        if (!aula && !atividade) {
            return (
                <header>
                    <nav>
                        <img src="../assets/images/logo_cellep.png" className="header-logo"/>
                    </nav>
                </header>
            )
        }

        const rows = []

        for (let i=1; i <= Database[aula].atividades.length; i++) {

            if (i == atividade) {
                rows.push((<li key={i}><a href="#" className="activi">{i}</a></li>))
            } else {
                let url = `${baseUrl}?aula=${aula}&atividade=${i}`
                rows.push((<li key={i}><a href={url}>{i}</a></li>))
            }

        }

        return (
            <header>
                <nav>
                    <a href="/"><img src="../assets/images/logo_cellep.png" className="header-logo"/></a>
                    <ul>
                        <li>
                            <ul className="header-links">
                                {rows}
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div className="header-title">Aula {aula} - {Database[aula].desc}</div>
            </header>
        )
    }

}


class Content extends React.Component {

    constructor(props) {
        super(props)
        this.html = (<div>...</div>)
        
    }

    render () {
        const {aula, atividade, baseUrl} = this.props.params

        const atividadeCorrente = Database[aula].atividades[Number(atividade)-1]

        if (atividadeCorrente.type == Type.TRINKET) {
            this.html = (
                <div className="trinket">
                    <iframe src={atividadeCorrente.content} width="100%" height="auto" frameBorder="0" marginWidth="0" marginHeight="0" allowFullScreen></iframe>
                </div>
            )

        } else if (atividadeCorrente.type == Type.YOUTUBE) {
            this.html = (
                <div className="youtube">
                    <iframe width="960" height="540" src={atividadeCorrente.content} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            )

        } else if (atividadeCorrente.type == Type.PRESENTATION) {
            this.html = (
                <div className="presentation">
                    <iframe src={atividadeCorrente.content} width="960" height="540" frameBorder="0" allowFullScreen mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                </div>
            )

        } else if (atividadeCorrente.type == Type.TYNKER) {
            this.html = (
                <div class="tynker">
                    <iframe width="100%" height="auto" src={atividadeCorrente.content} frameBorder="0" allowFullScreen></iframe>
                </div>
            )

        } else if (atividadeCorrente.type == Type.FREE) {
            this.html = (
                <div className="trinket">
                    {atividadeCorrente.content}
                </div>
            )
        }

        return (
            this.html
        )
    }

}


class Codebar extends React.Component {

    constructor(props) {
        super(props)
        this.rows = []
        this.handleClick = this.handleClick.bind(this)
        this.showInfo = true

        this.state = {
            copyInfo: null,
        }
    }

    handleClick(e){
        Clipboard.copy(e.target.getAttribute('data'))

        this.setState({
            copyInfo: (<span className="text-info">Copiado</span>),
        })

        if (this.showInfo) {
            
            this.showInfo = false

            setTimeout(() => {
                this.setState({
                    copyInfo: null,
                })
                this.showInfo = true
            }, 2000)

        }
        
    }

    render() {
        const {aula, atividade} = this.props.params
        const atividadeCorrente = Database[aula].atividades[Number(atividade)-1]

        if (!atividadeCorrente.commands) {
            return (
                <div></div>
            )
        }

        this.rows = atividadeCorrente.commands.map((command, k) => {
            return (<button data={command[1]} onClick={this.handleClick} key={k}>{command[0]}</button>)
        })

        return (
            <div className="code-bar">
                <div className="code-bar-left"></div>
                <div className="code-bar-center">
                    {this.rows}
                </div>
                <div className="code-bar-right">
                    {this.state.copyInfo}
                </div>
            </div>
        )
   
    }

}


class AulasList extends React.Component {

    constructor(props) {
        super(props)
        this.rows = []
        this.baseUrl = window.location.origin + window.location.pathname
    }

    render() {

        for (let aula in Database) {

            const url = `${this.baseUrl}?aula=${aula}&atividade=1`

            this.rows.push((
                <li key={aula}>
                    <a href={url}>Aula {aula} - {Database[aula].desc}</a>
                </li>
            ))
        }

        return (
            <div className="aulas-list">
                <h2>Atividades complementares fund. II</h2>
                <br/>
                <ul>{this.rows}</ul>
            </div>
        )
    }
}


class Index extends React.Component {

    constructor() {
        super()
        this.params = {
            'baseUrl': window.location.origin + window.location.pathname
        }
        
        window.location.search
            .slice(1)
            .split('&')
            .forEach(e => {
                const [k, v] = e.split('=')
                this.params[k] = v 
            })

    }

    render() {

        if (!window.location.search) {
            return (
            <div className="main">
                <Header params={this.params} />
                <AulasList />
            </div>
            )
        }

        return (
         <div className="main">
             <Header params={this.params} />
             <Content params={this.params} />
             <Codebar params={this.params} />
         </div>   
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'))
