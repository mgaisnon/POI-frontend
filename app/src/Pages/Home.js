import Menu from "../Layout/Menu"
import './Home.css'
import CardAnnonce from '../Components/Annonce/Annonce.js'
import Footer from "../Layout/Footer.js"
function Home() {

    
    return(
        <div>
            <Menu />
            <h3 className="titre-decouverte"> Nouvelles Annonces </h3>
            <div className="albumliste">
             <CardAnnonce />
             <CardAnnonce />   
             <CardAnnonce />   
             <CardAnnonce />   
             <CardAnnonce />   
            
            </div>

            <h3 className="titre-decouverte"> QUIZ ECOLOGIQUE </h3>
            <div className="quiz">
                <div class="quiz-container">
                    <h1>Vrai/Faux</h1>
                    <div class="question-container">
                        <p class="question">Les forêts tropicales produisent plus d'oxygène que les océans.</p>
                        <div class="buttons">
                            <button onclick="checkAnswer(true)">Vrai</button>
                            <button onclick="checkAnswer(false)">Faux</button>
                        </div>
                    </div>
                    <p id="result"></p>
                </div>
                <div class="quiz-container">
                    <h1>Vrai/Faux</h1>
                    <div class="question-container">
                        <p class="question">Le recyclage permet de réduire les émissions de gaz à effet de serre.</p>
                        <div class="buttons">
                            <button onclick="checkAnswer(true)">Vrai</button>
                            <button onclick="checkAnswer(false)">Faux</button>
                        </div>
                    </div>
                    <p id="result"></p>
                </div>
                <div class="quiz-container">
                    <h1>Vrai/Faux</h1>
                    <div class="question-container">
                        <p class="question">L'énergie éolienne est une source d'énergie renouvelable.</p>
                        <div class="buttons">
                            <button onclick="checkAnswer(true)">Vrai</button>
                            <button onclick="checkAnswer(false)">Faux</button>
                        </div>
                    </div>
                    <p id="result"></p>
                    
                </div>
               
</div>
<Footer />
                
                    
        </div>
    )
}

export default Home