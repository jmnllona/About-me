
import fs from "fs";
import path from "path";
import Pokemon from "./pokemonData.json" with {type : "json"}
// These are the Pokémon names used by PokémonDB.
// The id will be used for the saved file name.

// This is where the images will be saved.
const outputFolder = path.join(process.cwd(), "pokemon");


// Create the folder if it does not exist.
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
}


// This function downloads one image.
const downloadPokemonImage = async (
    id: number,
    imageName: string
) => {
    // Turn 1 into "001", 25 into "025", etc.
    const fileName = String(id).padStart(3, "0");

    // Build the PokémonDB image URL.
    const url =
        `https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen7x/regular/${imageName}.png`;

    // This is where the downloaded image will be saved.
    const filePath = path.join(outputFolder, `${fileName}.png`);

    console.log(`Downloading ${fileName}.png...`);

    // Ask the website for the image.
    const response = await fetch(url);

    // Stop if the website did not give us the image.
    if (!response.ok) {
        throw new Error(
            `Failed to download ${imageName}: ${response.status}`
        );
    }

    // Get the image as raw binary data.
    const imageBuffer = Buffer.from(await response.arrayBuffer());

    // Save the image to our folder.
    fs.writeFileSync(filePath, imageBuffer);

    console.log(`Saved: ${fileName}.png`);
};


// This function downloads all 151 Pokémon.
export const hello = async () => {
    let i = 1;
    for ( const pokemon of Pokemon) {
        if(i>509){
          try {
            await downloadPokemonImage(
                i,
               pokemon.name.toLowerCase()
            );
           
            

        
        } catch (error) {
            console.error(
                `Error downloading ${i} - ${i}`,
                error
            );
        }
        }

        i++;
    }

    console.log("Finished downloading all Pokémon images!" );
};




// function getPokemonImageName(name: string) {
//       const imageNames: Record<string, string> = {
//             "nidoran♀": "nidoran-f",
//             "nidoran♂": "nidoran-m",
//             "farfetch'd": "farfetchd",
//             "mr. mime": "mr-mime",
//       };

//       return imageNames[name.toLowerCase()] ?? name.toLowerCase();
// }

// import fs from "fs";
// import pokemondata from "./pokemon_data.json" with { type: "json" };
// import base from "./pokemon-images-base64.json" with { type: "json" };



// type Pokemon = {
//     id: number;
//     name: string;
//     types: string[];
//     height: number;
//     weight: number;
//     stats: {
//         hp: number;
//         attack: number;
//         defense: number;
//         specialAttack: number;
//         specialDefense: number;
//         speed: number;
//     };
//     description: string;
//     evolvesTo: number[] | null;
//     evolvesFrom: number[] | null;
//     image: string;
//     species: string;
//     abilities: {
//         normal: string[];
//         hidden: string | null;
//     }
// };

// type Base64Images = Record<string, string>;

// const pokemonList = pokemondata as Pokemon[];
// const base64Images = base as Base64Images;



// export  const puta =()=>{

    
// for (const pokemon of pokemonList) {
//     const id = pokemon.id.toString();

//     if (base64Images[id]) {
//         pokemon.image = base64Images[id];
//     } else {
//         console.log(`No Base64 image found for Pokémon ${id}`);
//     }
// }

// fs.writeFileSync(
//     "./src/scripts/pokemon_datas.json",
//     JSON.stringify(pokemonList, null, 4)
// );

// console.log("Finished replacing all image properties!");
// }



// import fs from "fs";
// import path from "path";

// // Folder containing 001.png, 002.png, etc.
// const imageFolder = path.join(process.cwd(), "pokemon");

// // This will contain all of our Base64 images.
// const pokemonImages: Record<string, string> = {};

//  export const hello =() =>{
    

// // Loop from Pokémon 1 to 151.
// for (let id = 1; id <= 649; id++) {

//     // Convert 1 → "001", 25 → "025", etc.
//     const fileName = String(id).padStart(3, "0");

//     // Get the full path to the PNG.
//     const filePath = path.join(
//         imageFolder,
//         `${fileName}.png`
//     );

//     // Read the PNG as binary data.
//     const imageBuffer = fs.readFileSync(filePath);

//     // Convert the binary data into Base64.
//     const base64 = "data:image/png;base64,"+ imageBuffer.toString("base64");

//     // Add the Base64 string to our object.
//     pokemonImages[id] = base64;

//     console.log(`Converted ${fileName}.png`);
// }


// // Save all Base64 strings into a JSON file.
// const outputPath = path.join(
//     process.cwd(),
//     "pokemon-images-base64.json"
// );

// fs.writeFileSync(
//     outputPath,
//     JSON.stringify(pokemonImages, null, 4)
// );

// console.log("Finished converting all images!");
//  }

// import console from "node:console";
// import shiny from "../../pokemon-images-base64-shiny.json" with {type: "json"};
// import pokemon from "../../pokemon-images-base64.json" with {type: "json"};


// export async function hello (){
//     let start = 0 ;let  end =20;
// while(end<641){
// try{
// type d = { pokemonId: number, image : string, shinyImage : string} ;
// const data : d[]=  []




// for(let i = start ; i<=end; i++){

// const bundle : d  = {pokemonId: 0 , image: "", shinyImage: ""};

// const index = String(i) as keyof typeof pokemon

// bundle.pokemonId = i;
// bundle.image = pokemon[index];
// bundle.shinyImage= shiny[index];

// data.push(bundle);
// }

// const res =  await fetch("http://localhost:5000/api/pokemon/add_sprite",{
// method: "POST",
//    headers: {
//             "Content-Type": "application/json",
//         },
// body: JSON.stringify(
// { media : data}
// )
// })

// const result = await res.json();


// console.log(result.message);
// end += 20;
// start += 20;
// }catch(e){

//     console.error("failed haha: ",e)
// }


// }
// }
