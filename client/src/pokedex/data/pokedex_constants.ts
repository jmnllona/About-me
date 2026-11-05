
export const types: Record<string, string> = {
      Fire: "text-orange-700 bg-orange-100  ",
      Water: "text-blue-700  bg-blue-100",
      Grass: "text-lime-700 bg-lime-100 ",
      Rock: "text-amber-950/70  bg-stone-200",
      Psychic: "text-pink-700 bg-pink-100",
      Dark: "text-slate-900 bg-slate-400",
      Electric: "text-yellow-700 bg-yellow-100",
      Ghost: "text-[#553B82] bg-[#EEE8F3]",
      Steel: "text-gray-700 bg-gray-100",
      Poison: "text-fuchsia-700 bg-fuchsia-100",
      Normal: "text-gray-700 border bg-white/80 border-gray-300",
      Fighting: "text-red-700 bg-red-100",
      Ice: "text-cyan-700 bg-cyan-100",
      Dragon: "text-indigo-700 bg-indigo-100",
      Ground: "text-[#85613B] bg-[#FFF1CC]",
Flying: "text-[#087C9B] bg-[#E3F4F7]",
Fairy: "text-[#C05B83] bg-[#FBEAF0]",
Bug: "text-[#AA7F37] bg-[#F0F9D5]"
};

export const abilities: Record<string, string> = {
    // Generation 3

    AirLock: "Eliminates the effects of weather.",
    ArenaTrap: "Prevents opposing Pokémon from fleeing.",
    BattleArmor: "Protects the Pokémon from critical hits.",
    Blaze: "Powers up Fire-type moves when HP is low.",
    Chlorophyll: "Boosts the Pokémon's Speed in sunshine.",
    ClearBody: "Prevents other Pokémon from lowering its stats.",
    CloudNine: "Eliminates the effects of weather.",
    ColorChange: "Changes the Pokémon's type to match the move that hits it.",
    CompoundEyes: "Raises the Pokémon's accuracy.",
    CuteCharm: "May infatuate Pokémon of the opposite gender on contact.",
    Damp: "Prevents the use of Self-Destruct and Explosion.",
    Drizzle: "Causes rain when the Pokémon enters battle.",
    Drought: "Causes harsh sunlight when the Pokémon enters battle.",
    EarlyBird: "The Pokémon awakens quickly from sleep.",
    EffectSpore: "Contact may cause paralysis, poison, or sleep.",
    FlameBody: "Contact may burn the attacking Pokémon.",
    FlashFire: "Powers up Fire-type moves after being hit by one.",
    Forecast: "Changes Castform's type and form according to the weather.",
    Guts: "Raises Attack when the Pokémon has a status condition.",
    HugePower: "Doubles the Pokémon's Attack.",
    Hustle: "Raises physical move power but lowers accuracy.",
    HyperCutter: "Prevents the Pokémon's Attack from being lowered.",
    Illuminate: "Increases the chance of encountering wild Pokémon.",
    Immunity: "Prevents the Pokémon from being poisoned.",
    InnerFocus: "Prevents the Pokémon from flinching.",
    Insomnia: "Prevents the Pokémon from falling asleep.",
    Intimidate: "Lowers the opposing Pokémon's Attack when entering battle.",
    KeenEye: "Prevents the Pokémon's accuracy from being lowered.",
    Levitate: "Gives immunity to Ground-type moves.",
    LightningRod: "Draws Electric-type moves toward the Pokémon.",
    Limber: "Prevents the Pokémon from becoming paralyzed.",
    LiquidOoze: "Damages Pokémon that try to absorb its HP.",
    MagmaArmor: "Prevents the Pokémon from becoming frozen.",
    MagnetPull: "Prevents Steel-type Pokémon from fleeing.",
    MarvelScale: "Raises Defense when the Pokémon has a status condition.",
    Minus: "Raises Special Attack when paired with Plus.",
    NaturalCure:
        "The Pokémon's status condition is cured when it switches out.",
    Oblivious: "Prevents infatuation and certain mental effects.",
    Overgrow: "Powers up Grass-type moves when HP is low.",
    OwnTempo: "Prevents the Pokémon from becoming confused.",
    Pickup: "The Pokémon may pick up items after battles.",
    Plus: "Raises Special Attack when paired with Minus.",
    PoisonPoint: "Contact may poison the attacking Pokémon.",
    Pressure: "Makes opposing Pokémon use more PP for their moves.",
    PurePower: "Doubles the Pokémon's Attack.",
    RainDish: "Restores HP gradually during rain.",
    RockHead: "Prevents damage from recoil moves.",
    RoughSkin: "Damages Pokémon that make physical contact.",
    RunAway: "Allows the Pokémon to flee from wild battles.",
    SandStream: "Causes a sandstorm when entering battle.",
    SandVeil: "Raises evasiveness during a sandstorm.",
    SereneGrace: "Increases the chance of additional move effects.",
    ShadowTag: "Prevents opposing Pokémon from switching or fleeing.",
    ShedSkin: "May cure the Pokémon's status condition each turn.",
    ShellArmor: "Protects the Pokémon from critical hits.",
    ShieldDust: "Prevents additional effects from moves.",
    Soundproof: "Protects the Pokémon from sound-based moves.",
    SpeedBoost: "Raises Speed at the end of each turn.",
    Static: "Contact may paralyze the attacking Pokémon.",
    Stench: "May cause the target to flinch.",
    StickyHold:
        "Prevents the Pokémon's held item from being removed.",
    Sturdy:
        "Prevents one-hit knockout moves and can endure a fatal hit at full HP.",
    SuctionCups:
        "Prevents forced switching and pulling effects.",
    Swarm: "Powers up Bug-type moves when HP is low.",
    SwiftSwim: "Doubles Speed during rain.",
    Synchronize:
        "Passes burn, paralysis, or poison to the inflicting Pokémon.",
    ThickFat: "Reduces damage from Fire- and Ice-type moves.",
    Torrent: "Powers up Water-type moves when HP is low.",
    Trace: "Copies an opposing Pokémon's Ability.",
    Truant: "The Pokémon can only act every other turn.",
    VitalSpirit: "Prevents the Pokémon from falling asleep.",
    VoltAbsorb: "Restores HP when hit by an Electric-type move.",
    WaterAbsorb: "Restores HP when hit by a Water-type move.",
    WaterVeil: "Prevents the Pokémon from being burned.",
    WhiteSmoke: "Prevents other Pokémon from lowering its stats.",
    WonderGuard: "Only super-effective moves can damage the Pokémon.",

    // Generation 4

    Adaptability:
        "Powers up moves that are the same type as the Pokémon.",
    Aftermath:
        "Damages the attacker when the Pokémon is knocked out by contact.",
    AngerPoint: "A critical hit maximizes the Pokémon's Attack.",
    Anticipation:
        "Warns of an opposing Pokémon's dangerous moves.",
    BadDreams: "Damages sleeping opposing Pokémon.",
    Download:
        "Raises Attack or Special Attack based on the opponent's defenses.",
    DrySkin:
        "Restores HP from Water moves and rain but loses HP in sunlight.",
    Filter: "Reduces damage from super-effective moves.",
    FlowerGift:
        "Boosts Attack and Special Defense in sunshine.",
    Forewarn: "Reveals one of the opposing Pokémon's moves.",
    Frisk: "Reveals the opposing Pokémon's held item.",
    Gluttony:
        "Allows the Pokémon to eat certain Berries earlier than normal.",
    Heatproof: "Reduces damage from Fire-type moves.",
    HoneyGather: "May collect Honey after battle.",
    Hydration: "Cures status conditions during rain.",
    IceBody: "Restores HP during hail.",
    IronFist: "Powers up punching moves.",
    Klutz: "Prevents the Pokémon from using held-item effects.",
    LeafGuard: "Prevents status conditions during sunshine.",
    MagicGuard: "Prevents indirect damage.",
    MoldBreaker:
        "Allows moves to ignore certain opposing Abilities.",
    MotorDrive:
        "Electric-type moves have no effect and raise Speed.",
    Multitype:
        "Changes Arceus's type according to its held Plate.",
    NoGuard:
        "Ensures that the Pokémon's and opponent's moves do not miss.",
    Normalize:
        "Changes all moves used by the Pokémon to Normal type.",
    PoisonHeal:
        "Restores HP instead of taking poison damage.",
    QuickFeet:
        "Raises Speed when the Pokémon has a status condition.",
    Reckless:
        "Powers up moves that cause recoil.",
    Rivalry:
        "Changes move power depending on the opponent's gender.",
    Scrappy:
        "Allows Normal- and Fighting-type moves to hit Ghost types.",
    Simple: "Doubles the effect of stat changes.",
    SkillLink:
        "Makes multi-hit moves hit the maximum number of times.",
    SlowStart:
        "Halves Attack and Speed for the first five turns.",
    Sniper: "Powers up critical hits.",
    SnowCloak:
        "Raises evasiveness during snow or hail.",
    SnowWarning:
        "Causes snow or hail when entering battle.",
    SolarPower:
        "Boosts Special Attack in sunshine but lowers HP each turn.",
    SolidRock:
        "Reduces damage from super-effective moves.",
    Stall:
        "Makes the Pokémon move after most other Pokémon.",
    Steadfast:
        "Raises Speed whenever the Pokémon flinches.",
    StormDrain:
        "Draws Water-type moves toward the Pokémon.",
    SuperLuck:
        "Raises the chance of landing critical hits.",
    TangledFeet:
        "Raises evasiveness while the Pokémon is confused.",
    Technician:
        "Powers up weaker moves.",
    TintedLens:
        "Powers up moves that are not very effective.",
    Unaware:
        "Ignores the opposing Pokémon's stat changes.",
    Unburden:
        "Doubles Speed after the Pokémon loses its held item.",

    // Generation 5

    Analytic:
        "Powers up moves when the Pokémon moves after its target.",
    BigPecks:
        "Prevents the Pokémon's Defense from being lowered.",
    Contrary:
        "Reverses the effect of stat changes.",
    CursedBody:
        "May disable a move that hits the Pokémon.",
    Defeatist:
        "Halves Attack and Special Attack when HP is low.",
    Defiant:
        "Sharply raises Attack when another stat is lowered.",
    FlareBoost:
        "Boosts Special Attack when the Pokémon is burned.",
    FriendGuard:
        "Reduces damage taken by allies.",
    Harvest:
        "May restore a used Berry after each turn.",
    Healer:
        "May cure an ally's status condition.",
    HeavyMetal:
        "Doubles the Pokémon's weight.",
    Illusion:
        "Disguises the Pokémon as another Pokémon.",
    Imposter:
        "Transforms into the opposing Pokémon.",
    Infiltrator:
        "Ignores certain protective effects used by the opponent.",
    IronBarbs:
        "Damages Pokémon that make contact.",
    Justified:
        "Raises Attack when hit by a Dark-type move.",
    LightMetal:
        "Halves the Pokémon's weight.",
    MagicBounce:
        "Reflects certain status moves back at the user.",
    Moody:
        "Raises one stat and lowers another at the end of each turn.",
    Moxie:
        "Raises Attack after knocking out an opponent.",
    Multiscale:
        "Reduces damage taken when HP is full.",
    Mummy:
        "Changes the Ability of a Pokémon that makes contact.",
    Overcoat:
        "Protects against weather damage.",
    Pickpocket:
        "Steals the attacker's held item after making contact.",
    PoisonTouch:
        "Contact may poison the opposing Pokémon.",
    Prankster:
        "Gives priority to status moves.",
    Rattled:
        "Raises Speed when hit by certain move types.",
    Regenerator:
        "Restores some HP when the Pokémon switches out.",
    SandForce:
        "Powers up Rock-, Ground-, and Steel-type moves during a sandstorm.",
    SandRush:
        "Doubles Speed during a sandstorm.",
    SapSipper:
        "Grass-type moves have no effect and raise Attack.",
    SheerForce:
        "Powers up moves with additional effects but removes those effects.",
    Telepathy:
        "Avoids damage from allies' moves.",
    Teravolt:
        "Allows moves to ignore certain opposing Abilities.",
    ToxicBoost:
        "Boosts physical moves when the Pokémon is poisoned.",
    Turboblaze:
        "Allows moves to ignore certain opposing Abilities.",
    Unnerve:
        "Prevents opposing Pokémon from eating Berries.",
    VictoryStar:
        "Boosts the accuracy of the Pokémon and its allies.",
    WeakArmor:
        "Raises Speed and lowers Defense when hit by a physical move.",
    WonderSkin:
        "Makes status moves more likely to miss.",
    ZenMode:
        "Changes Darmanitan's form when its HP becomes low.",

    // Missing from the original abilities list
    Competitive:
        "Boosts Special Attack sharply when the Pokémon's stats are lowered.",
};

export const hiddenAbilities: Record<string, string> = {
    // Generation 1

    Chlorophyll: abilities.Chlorophyll,
    SolarPower: abilities.SolarPower,
    RunAway: abilities.RunAway,
    TintedLens: abilities.TintedLens,
    Sniper: abilities.Sniper,
    RainDish: abilities.RainDish,
    BigPecks: abilities.BigPecks,
    Hustle: abilities.Hustle,
    Unnerve: abilities.Unnerve,
    LightningRod: abilities.LightningRod,
    SandForce: abilities.SandForce,
    FriendGuard: abilities.FriendGuard,
    Drought: abilities.Drought,
    Infiltrator: abilities.Infiltrator,
    WonderSkin: abilities.WonderSkin,
    Damp: abilities.Damp,
    SwiftSwim: abilities.SwiftSwim,
    Defiant: abilities.Defiant,
    Technician: abilities.Technician,
    DrySkin: abilities.DrySkin,
    Overcoat: abilities.Overcoat,
    WeakArmor: abilities.WeakArmor,
    InnerFocus: abilities.InnerFocus,
    SheerForce: abilities.SheerForce,
    Aftermath: abilities.Aftermath,
    Harvest: abilities.Harvest,
    BattleArmor: abilities.BattleArmor,
    PoisonTouch: abilities.PoisonTouch,
    CursedBody: abilities.CursedBody,
    Analytic: abilities.Analytic,
    TangledFeet: abilities.TangledFeet,
    IceBody: abilities.IceBody,
    MarvelScale: abilities.MarvelScale,
    Multiscale: abilities.Multiscale,
    SnowCloak: abilities.SnowCloak,
    FlameBody: abilities.FlameBody,
    VitalSpirit: abilities.VitalSpirit,
    Moxie: abilities.Moxie,
    Hydration: abilities.Hydration,
    Steadfast: abilities.Steadfast,
    Unburden: abilities.Unburden,
    QuickFeet: abilities.QuickFeet,
    Guts: abilities.Guts,
    MagicBounce: abilities.MagicBounce,
    Gluttony: abilities.Gluttony,
    ThickFat: abilities.ThickFat,
    MagicGuard: abilities.MagicGuard,
    Anticipation: abilities.Anticipation,
    Stench: abilities.Stench,
    EffectSpore: abilities.EffectSpore,
    CloudNine: abilities.CloudNine,

    // Generation 2

    LeafGuard: abilities.LeafGuard,
    FlashFire: abilities.FlashFire,
    SapSipper: abilities.SapSipper,
    Rattled: abilities.Rattled,
    SkillLink: abilities.SkillLink,
    EarlyBird: abilities.EarlyBird,
    SpeedBoost: abilities.SpeedBoost,
    Frisk: abilities.Frisk,
    Unaware: abilities.Unaware,
    Prankster: abilities.Prankster,
    Telepathy: abilities.Telepathy,
    Moody: abilities.Moody,
    SandVeil: abilities.SandVeil,
    Regenerator: abilities.Regenerator,
    Justified: abilities.Justified,
    StormDrain: abilities.StormDrain,
    VoltAbsorb: abilities.VoltAbsorb,
    WaterAbsorb: abilities.WaterAbsorb,
    WaterVeil: abilities.WaterVeil,

    // Generation 3

    Minus: abilities.Minus,
    ToxicBoost: abilities.ToxicBoost,
    PoisonHeal: abilities.PoisonHeal,
    ShellArmor: abilities.ShellArmor,
    Soundproof: abilities.Soundproof,
    SandRush: abilities.SandRush,
    Adaptability: abilities.Adaptability,
    SuperLuck: abilities.SuperLuck,
    AngerPoint: abilities.AngerPoint,

    // Generation 4

    IronFist: abilities.IronFist,
    Reckless: abilities.Reckless,
    Competitive: abilities.Competitive,
    Limber: abilities.Limber,
    HeavyMetal: abilities.HeavyMetal,
    MoldBreaker: abilities.MoldBreaker,
    NoGuard: abilities.NoGuard,

    // Generation 5

    Contrary: abilities.Contrary,
    ZenMode: abilities.ZenMode,
    Defeatist: abilities.Defeatist,
    Illusion: abilities.Illusion,
    VictoryStar: abilities.VictoryStar,
    Teravolt: abilities.Teravolt,
    Turboblaze: abilities.Turboblaze,
    Healer: abilities.Healer,
    Static: abilities.Static,
};




const UI = {
      page: "min-h-screen bg-amber-50",
      container: "mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-16",

      header: "border-b-2 border-amber-900/20 pb-4",
      title: "text-4xl font-bold text-amber-950",

      layout: "flex w-full flex-col gap-6 md:flex-row",

      panel: "min-w-0 w-full rounded-md border-2 border-amber-900/20 bg-amber-100",
      detailsPanel: "w-full md:max-w-lg",

      panelHeader: "flex items-center justify-between border-b-2 border-amber-900/20 px-4 py-3",

      panelTitle: "text-xl font-bold text-amber-950",

      content: "px-4 py-4",

      searchWrapper: "mb-4",
      searchLabel: "sr-only",

      search: "w-full rounded-md border-2 border-amber-900/20 bg-amber-50 px-4 py-2 text-amber-950 outline-none placeholder:text-amber-900/50 focus:border-amber-700",

      list: "flex max-h-[500px] flex-col gap-2 overflow-y-auto pr-1",

      listItem: "flex w-full items-center gap-4 rounded-md border-2 border-transparent bg-amber-50 px-4 py-3 text-left transition hover:border-amber-700/40 hover:bg-amber-200",

      selectedListItem: "border-amber-700 bg-amber-200",

      pokemonId: "w-10 shrink-0 text-sm font-bold text-amber-900/50",

      pokemonName: "font-semibold capitalize text-amber-950",

      image: "h-20 w-20 object-contain image-rendering-auto",

      detailsImage: "h-40 w-40 object-contain",

      type: "rounded-full px-3 py-1 text-xs font-bold capitalize text-white",

      button: "rounded-md border-2 border-amber-900/20 bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-950 transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-40",

      pageButton: "rounded-md px-3 py-2 text-sm font-bold transition hover:bg-amber-200",

      infoGrid: "grid grid-cols-2 gap-4",

      infoBox: "rounded-md bg-amber-50 p-3",

      infoLabel: "text-xs font-bold uppercase tracking-wide text-amber-900/50",

      infoValue: "mt-1 font-semibold capitalize text-amber-950",

      statRow: "mb-4",

      statHeader: "mb-1 flex items-center justify-between",

      statLabel: "text-sm font-semibold text-amber-950",

      statValue: "text-sm font-bold text-amber-900",

      statTrack: "h-3 overflow-hidden rounded-full bg-amber-900/10",

      statBar: "h-full rounded-full bg-amber-700 transition-all",

      description: "leading-relaxed text-amber-950/80",

      pagination: "mt-4 flex items-center justify-center gap-2",

      loading: "flex min-h-40 items-center justify-center text-amber-900/60",

      error: "rounded-md bg-red-100 p-4 text-red-800",

      empty: "py-8 text-center text-amber-900/60",
} as const;
