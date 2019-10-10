import React from 'react';
import "./Students.css"
import Navigation from "../Navigation/Navigation";

export default class StudentsTable extends React.Component {
    constructor(props) {
        super(props);
        this.studentFeedback = getStudentFeedback(this.props.student);
    }

    render() {
        return (
            <div>
                <div className="col-md-2">
                    <img className="img-responsive" src="resources/images/student.png"></img>
                </div>
                <div className="col-md-5" style={{padding: '10px'}}>
                    <h2>{this.props.student.name}</h2>
                    <div className="speech-bubble">
                        <strong>{this.studentFeedback}</strong>
                    </div>
                </div>
            </div>
        );
    }
}

/**
 * @param student   The student who's giving feedback
 * @return          The feedback based on the students happiness levels
 */
function getStudentFeedback(selectedStudent) {

    var usesVerb        = (Math.random() >= 0.5);
    var useNoun         = true;
    var feedback         = (usesVerb ? "I " : "The ");
    var useNeutralIntro;

    var verbs      = [];
    var adjectives = [];

    var happinessLevels = new Map();

    happinessLevels.set("academic", selectedStudent.academicHappinessRating);
//      happinessLevels.put("advisor", student.getAdvisorHappinessHappinessRating());
    happinessLevels.set("health", selectedStudent.healthHappinessRating);
    happinessLevels.set("money", selectedStudent.moneyHappinessRating);
//      happinessLevels.put("fun" , student.getFunHappinessRating());

    // Negative feedback
    if(selectedStudent.happinessLevel < 50) {
        verbs.push("hate");
        verbs.push("don't like ");
        verbs.push("dislike ");
        verbs.push("am displeased with ");
        verbs.push("am not a fan of ");

        adjectives.push("awful ");
        adjectives.push("bad ");
        adjectives.push("terrible ");
        adjectives.push("crummy ");
        adjectives.push("lousy ");
        adjectives.push("sad ");

      // Positive feedback
    } else if(selectedStudent.happinessLevel > 70) {
        verbs.push("love ");
        verbs.push("am very pleased with ");
        verbs.push("am ecstatic about ");

        adjectives.push("great ");
        adjectives.push("fantastic ");
        adjectives.push("super ");
        adjectives.push("urprisingly well ");

      // Neutral feedback
    } else {
        useNoun                 = false;
        var neutralIntro   = ["All things considered, ", "All together, ", ""];
        var neutralMidro   = ["Everything is ", "All is ", "Things are "];
        var neutralOutro   = ["okay", "alright", "in order", "not bad", "fine", "reasonable", "average"];

        useNeutralIntro = Math.floor(Math.random() * neutralIntro.length);

        if(useNeutralIntro==neutralIntro.length-1) {
            feedback = neutralMidro[Math.floor(Math.random() * neutralMidro.length)];
        } else {
            feedback =  neutralIntro[useNeutralIntro] +
                neutralMidro[Math.floor(Math.random() * neutralMidro.length)].toLowerCase();
        }
        feedback += neutralOutro[Math.floor(Math.random() * neutralOutro.length)];

    }

    if(useNoun)
        if (usesVerb)
            feedback += verbs.get(Math.floor(Math.random() * verbs.length)) +
                "the " + getFeedbackNoun(happinessLevels, true);
        else
            feedback += getFeedbackNoun(happinessLevels, true) + "is " +
                adjectives.get(Math.floor(Math.random() * adjectives.length));

    // Conclusion
    var conclusion =  [" here", " at this school", " at "+ selectedStudent.runId, ""];
    feedback += conclusion[Math.floor(Math.random() * conclusion.length)];
    var positivePunctuation = ["!", "!!", "!!!"];
    var negativePunctuation = [".", "..", "..."];

    if(selectedStudent.happinessLevel < 50) {
        feedback += negativePunctuation[Math.floor(Math.random() * negativePunctuation.length)];
    } else if (selectedStudent.happinessLevel > 70) {
        feedback += positivePunctuation[Math.floor(Math.random() * positivePunctuation.length)];
    } else {
        feedback += ".";
    }

    return feedback;
}

function getFeedbackNoun(vals, isNegative) {

    var mapValues = Object.values(vals);
    var current = vals[0];
    var nouns = [];

    vals.forEach(e => {
        if(isNegative && e < current)
            current = e;
        if(!isNegative && e > current)
            current = e;
    });

    if(vals.get(current) === "money") {
        nouns.push("tuition ");
        nouns.push("tuition rate ");
    }
    else if(vals.get(current) === "academic") {
        nouns.push("number of professors ");
        nouns.push("student professor ratio ");
    }
    else if(vals.get(current) === "health") {
        nouns.push("health care");
        nouns.push("healthiness ");
        nouns.push("health system ");
    }

    return nouns.get(Math.floor(Math.random() * nouns.length));
}