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
          description="Descrição do personagem vai aqui. Inclua detalhes como antecedentes, características e outras informações relevantes."
        />
        
        <Profile 
          image="https://picfiles.alphacoders.com/177/177790.jpg"
          name="Iron Man"
          description="Descrição do personagem vai aqui. Inclua detalhes como antecedentes, características e outras informações relevantes."
        />

        <Profile 
          image="https://wallpapercave.com/wp/wp8973824.jpg"
          name="Capitão América"
          description="Descrição do personagem vai aqui. Inclua detalhes como antecedentes, características e outras informações relevantes."
        />

        <Profile 
          image="https://images.hdqwalls.com/download/hulk-angry-8p-1920x1080.jpg"
          name="Hulk"
          description="Descrição do personagem vai aqui. Inclua detalhes como antecedentes, características e outras informações relevantes."
        />

      </div>
                </div>
            </div>
        </>
    )
}