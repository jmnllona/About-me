
import type { StatRange, PokemonStats, CalculatedStats } from "../types/pokemon";


      const MAX_IV = 31;
      const MAX_EV_PER_STAT = 252;
      const LEVEL = 100;
      const MIN_NATURE = 0.9;
      const MAX_NATURE = 1.1;



  export function calculateHP(base: number): StatRange {
            const min = Math.floor(((2 * base + 0 + Math.floor(0 / 4)) * LEVEL) / 100) + LEVEL + 10;

            const max = Math.floor(((2 * base + MAX_IV + Math.floor(MAX_EV_PER_STAT / 4)) * LEVEL) / 100) + LEVEL + 10;

            return {
                  base,
                  min,
                  max,
            };
      }

  export    function calculateStat(base: number): StatRange {
            const min = Math.floor((Math.floor(((2 * base + 0 + Math.floor(0 / 4)) * LEVEL) / 100) + 5) * MIN_NATURE);

            const max = Math.floor(
                  (Math.floor(((2 * base + MAX_IV + Math.floor(MAX_EV_PER_STAT / 4)) * LEVEL) / 100) + 5) * MAX_NATURE,
            );

            return {
                  base,
                  min,
                  max,
            };
      }

    export function calculateStats(baseStats: PokemonStats): CalculatedStats {
            return {
                  hp: calculateHP(baseStats.hp),
                  attack: calculateStat(baseStats.attack),
                  defense: calculateStat(baseStats.defense),
                  specialAttack: calculateStat(baseStats.specialAttack),
                  specialDefense: calculateStat(baseStats.specialDefense),
                  speed: calculateStat(baseStats.speed),
            };
      }
