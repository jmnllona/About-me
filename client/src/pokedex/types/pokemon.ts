
export type Pokemon = {
      id: number;
      name: string;
      types: string[];
      height: number;
      weight: number;
      stats: {
            hp: number;
            attack: number;
            defense: number;
            specialAttack: number;
            specialDefense: number;
            speed: number;
      };
      description: string;
      species: string;
      abilities: {
            normal: string[];
            hidden: string | null;
      };
       evolution: {id: number, from?: number , method: string, value?: number | string }[] | null;

     training: {
    evYield: {
        stat: string;
        amount: number;
    };
    catchRate: number;
    baseFriendship: number;
    baseExp: number;
    growthRate: string;
};
}


 export  type AsideProps = {
      pokemon: Pokemon;
      prevPokemon?: Pokemon | null;
      nextPokemon?: Pokemon | null;
      onPrevious: () => void;
      onNext: () => void;
      isOpen: boolean;
      setOpen: React.Dispatch<React.SetStateAction<boolean>>;
      setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
      pokemon_data: Pokemon[];
};

export type PokemonStats = Pokemon["stats"];


export type StatBarProps = {
      value: number;
      label: string;
      baseTotal: number;
      max: number;
      min: number;
};



    export  type StatRange = {
            base: number;
            min: number;
            max: number;
      };

  export    type CalculatedStats = {
            hp: StatRange;
            attack: StatRange;
            defense: StatRange;
            specialAttack: StatRange;
            specialDefense: StatRange;
            speed: StatRange;
      };


//  this is the type that the json data should follow cause theres alot of mistakes the other ai made....  take yout time....search for accurate information ... if a pokemon has evolution include the base form. if it dont have just put null , you can follow the gen1 format  but change if the pokemon has no evolution, just put null ....





// CREATE TABLE pokemon_images (
//     id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
//     pokemon_id INTEGER NOT NULL,
//     name VARCHAR(50) NOT NULL,
//     image TEXT NOT NULL,

//     CONSTRAINT fk_pokemon_images_pokemon
//         FOREIGN KEY (pokemon_id)
//         REFERENCES pokemon(id)
//         ON DELETE CASCADE,

//     CONSTRAINT uq_pokemon_images_pokemon_name
//         UNIQUE (pokemon_id, name)
// );