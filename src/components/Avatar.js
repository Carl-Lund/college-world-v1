import React from "react";
import Avataaar from "avataaars-updated";
const positions =  {
    accessoriesType:0,
    clothesColor:1,
    clotheType:2,
    eyeType:3,
    eyebrowType:4,
    facialHairColor:5,
    facialHairType:6,
    graphicType:7,
    hairColor:8,
    mouthType:9,
    skinColor:10,
    topType:11
}
const options = {
    tops:{
        "A": "NoHair",
        "B": "Eyepatch",
        "C": "Hat",
        "D": "Hijab",
        "E": "Turban",
        "F": "WinterHat1",
        "G": "WinterHat2",
        "H": "WinterHat3",
        "I": "WinterHat4",
        "J": "LongHairBigHair",
        "K": "LongHairBob",
        "L": "LongHairBun",
        "M": "LongHairCurly",
        "N": "LongHairCurvy",
        "O": "LongHairDreads",
        "P": "LongHairFrida",
        "Q": "LongHairFro",
        "R": "LongHairFroBand",
        "S": "LongHairNotTooLong",
        "T": "LongHairShavedSides",
        "U": "LongHairMiaWallace",
        "V": "LongHairStraight",
        "W": "LongHairStraight2",
        "X": "LongHairStraightStrand",
        "Y": "ShortHairDreads01",
        "Z": "ShortHairDreads02",
        "0": "ShortHairFrizzle",
        "1": "ShortHairShaggyMullet",
        "2": "ShortHairShortCurly",
        "3": "ShortHairShortFlat",
        "4": "ShortHairShortRound",
        "5": "ShortHairShortWaved",
        "6": "ShortHairSides",
        "7": "ShortHairTheCaesar",
        "8": "ShortHairTheCaesarSidePart"
    },
    accessories: {
        "A":"Blank",
        "B":"Kurt",
        "C":"Prescription01",
        "D":"Prescription02",
        "E":"Round",
        "F":"Sunglasses",
        "G":"Wayfarers"
    },
    hairColors: {
        "A": "Auburn",
        "B": "Black",
        "C": "Blonde",
        "D": "BlondeGolden",
        "E": "Brown",
        "F": "BrownDark",
        "G": "PastelPink",
        "H": "Blue",
        "I": "Platinum",
        "J": "Red",
        "K": "SilverGray"
    },
    facialHairs: {
        "A": "Blank",
        "B": "BeardMedium",
        "C": "BeardLight",
        "D": "BeardMajestic",
        "E": "MoustacheFancy",
        "F": "MoustacheMagnum"
    },
    facialHairColors: {
        "A": "Auburn",
        "B": "Black",
        "C": "Blonde",
        "D": "BlondeGolden",
        "E": "Brown",
        "F": "BrownDark",
        "G": "Platinum",
        "H": "Red"
    },
    clothes: {
        "A": "BlazerShirt",
        "B": "BlazerSweater",
        "C": "CollarSweater",
        "D": "GraphicShirt",
        "E": "Hoodie",
        "F": "Overall",
        "G": "ShirtCrewNeck",
        "H": "ShirtScoopNeck",
        "I": "ShirtVNeck"
    },
    clothesColors:{
        "A": "Black",
        "B": "Blue01",
        "C": "Blue02",
        "D": "Blue03",
        "E": "Gray01",
        "F": "Gray02",
        "G": "Heather",
        "H": "PastelBlue",
        "I": "PastelGreen",
        "J": "PastelOrange",
        "K": "PastelRed",
        "L": "PastelYellow",
        "M": "Pink",
        "N": "Red",
        "O": "White"
    },
    graphics: {
        "A": "Bat",
        "B": "Cumbia",
        "C": "Deer",
        "D": "Diamond",
        "E": "Hola",
        "F": "Pizza",
        "G": "Resist",
        "H": "Selena",
        "I": "Bear",
        "J": "SkullOutline",
        "K": "Skull"
    },
    eyes:{
        "A": "Close",
        "B": "Cry",
        "C": "Default",
        "D": "Dizzy",
        "E": "EyeRoll",
        "F": "Happy",
        "G": "Hearts",
        "H": "Side",
        "I": "Squint",
        "J": "Surprised",
        "K": "Wink",
        "L": "WinkWacky"
    },
    eyebrows:{
        "A": "Angry",
        "B": "AngryNatural",
        "C": "Default",
        "D": "DefaultNatural",
        "E": "FlatNatural",
        "F": "RaisedExcited",
        "G": "RaisedExcitedNatural",
        "H": "SadConcerned",
        "I": "SadConcernedNatural",
        "J": "UnibrowNatural",
        "K": "UpDown",
        "L": "UpDownNatural"
    },
    mouths: {
        "A": "Concerned",
        "B": "Default",
        "C": "Disbelief",
        "D": "Eating",
        "E": "Grimace",
        "F": "Sad",
        "G": "ScreamOpen",
        "H": "Serious",
        "I": "Smile",
        "J": "Tongue",
        "K": "Twinkle",
        "L": "Vomit"
    },
    skins:{
        "A": "Tanned",
        "B": "Yellow",
        "C": "Pale",
        "D": "Light",
        "E": "Brown",
        "F": "DarkBrown",
        "G": "Black"
    }
}
export default class Students extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return(
            <Avataaar style={this.props.style}
                avatarStyle='Circle'
                topType={options.tops[this.props.code[positions.topType]]}
                accessoriesType={options.accessories[this.props.code[positions.accessoriesType]]}
                hairColor={options.hairColors[this.props.code[positions.hairColor]]}
                facialHairType={options.facialHairs[this.props.code[positions.facialHairType]]}
                facialHairColor={options.facialHairColors[this.props.code[positions.facialHairColor]]}
                clotheType={options.clothes[this.props.code[positions.clotheType]]}
                clotheColor={options.clothesColors[this.props.code[positions.clothesColor]]}
                graphicType={options.graphics[this.props.code[positions.graphicType]]}
                eyeType={options.eyes[this.props.code[positions.eyeType]]}
                eyebrowType={options.eyebrows[this.props.code[positions.eyebrowType]]}
                mouthType={options.mouths[this.props.code[positions.mouthType]]}
                skinColor={options.skins[this.props.code[positions.skinColor]]}
            />
        );
    }
}