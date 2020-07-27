class Generator {

    constructor() {
        this.firstSegment = ["Avec la restriction actuelle", "Considérant l'orientation générale",
        "Eu égard à la crise conjoncturelle", "Nonobstant la difficulté observée",
        "Du fait de l'inertie de ces derniers temps", "En ce qui concerne la dégradation de l'époque actuelle",
        "Dans le cas particulier de l'austérité présente", "Tant que durera la morosité que nous constatons",
        "Malgré l'ambiance de cette époque", "Pour réagir face à la fragilité contextuelle"];

        this.secondSegment = ["il convient d'anticiper la majorité des", "on se doit d'imaginer l'ensemble des",
        "il est préférable de remodeler la somme des", "il serait intéressant d'avoir à l'esprit la majorité des",
        "il ne faut pas négliger de se remémorer la totalité des", "on ne peut se passer de gérer la globalité des",
        "il serait bon de fédérer les relations des", "il faut de toute urgence comprendre la plus grande partie des",
        "je recommande d'analyser systématiquement les", "il ne faut pas s'interdire d'expérimenter précisément les"];

        this.thirdSegment = ["solutions imaginables à long terme", "issues possibles pour longtemps",
        "problématiques de bons sens à l'avenir", "voies s'offrant à nous pour le futur",
        "alternatives envisageables à court terme", "organisations matricielles éventuelles rapidement",
        "améliorations réalisables dans une perspective correcte", "synergies déclinables même si ce n'est pas facile",
        "modalités optimales avec beaucoup de recul", "stratégies opportunes très attentivement"];
        
        this.generateQuotation();
    }

    drawRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    generateQuotation = () => {
        document.querySelector("button").addEventListener("click", (e) => {
            this.printQuotation(this.firstSegment[this.drawRandomNumber(0, 9)] + ", " +
            this.secondSegment[this.drawRandomNumber(0, 9)] + " " +
            this.thirdSegment[this.drawRandomNumber(0, 9)] + ".");           
        });
    }

    printQuotation = (quotation) => {
        if(document.getElementById("quotation") !== "") {
            document.getElementById("quotation").textContent = "";
        }
        let paragraph = document.createElement("p");
        paragraph.textContent = quotation;
        document.getElementById("quotation").appendChild(paragraph);
    }
}

new Generator();