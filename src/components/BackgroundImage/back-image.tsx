import styles from "./backImage.module.css"
// import avengers from "./photos/wp4770368.jpg"
import { Profile } from "../Profile/Profile"

export function BackImage(){
    return(
        <>
            <div className={styles.container}>
                <div className={styles.background}></div>
                <div className={styles.content}>
                <div className="container">
        <Profile 
          image="https://wallsdesk.com/wp-content/uploads/2016/12/Thor-High-Quality-Wallpapers.jpg"
          name="Thor"
          description="Thor, o príncipe de Asgard e deus do trovão, é enviado à Terra por seu pai, Odin, para aprender humildade. Ele empunha o martelo encantado Mjolnir, que lhe dá o poder de controlar raios e voar. Durante seu exílio, ele aprende a ser um herói verdadeiro, protegendo tanto Asgard quanto a Terra. Thor se junta aos Vingadores para enfrentar ameaças cósmicas e defender o universo."
        />
        
        <Profile 
          image="https://picfiles.alphacoders.com/177/177790.jpg"
          name="Homem de Ferro (Tony Stark)"
          description="Tony Stark, um brilhante inventor e industrial, é sequestrado e gravemente ferido. Usando sua inteligência, ele constrói uma armadura para escapar e, posteriormente, aprimora essa tecnologia para se tornar o Homem de Ferro. Ele utiliza sua armadura para combater o crime e proteger o mundo, fundando os Vingadores e evoluindo de um industrial egoísta para um herói altruísta.
          "
        />

        <Profile 
          image="https://wallpapercave.com/wp/wp8973824.jpg"
          name="Capitão América (Steve Rogers)"
          description="Steve Rogers, um jovem franzino, se voluntaria para um experimento durante a Segunda Guerra Mundial e é transformado pelo soro do super-soldado, adquirindo força e agilidade excepcionais. Ele se torna o Capitão América, um símbolo de patriotismo e justiça, liderando os Aliados contra as forças do mal. Após ficar congelado por décadas, ele é revivido no presente e continua sua luta como líder dos Vingadores."
        />

        <Profile 
          image="https://images.hdqwalls.com/download/hulk-angry-8p-1920x1080.jpg"
          name="Hulk (Bruce Banner)"
          description="O cientista Bruce Banner é exposto a radiação gama durante um experimento, resultando em sua transformação no Hulk, uma criatura verde de força incrível que surge quando Banner fica com raiva. Ele luta para controlar o monstro dentro de si, ao mesmo tempo em que usa seu poder para proteger os inocentes. Sua jornada é marcada por uma constante busca por cura e aceitação."
        />

      </div>
                </div>
            </div>
        </>
    )
}