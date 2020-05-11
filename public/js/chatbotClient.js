let personals = {
    name: "",
    gender: "",
    location: "",
    testTaken: "",
    exit: ""
}

let ques = [{
        question: "how are you madam today",
        answer: "A1"
    },
    {
        question: "who are you steven fernandes",
        answer: "A2"
    }
];

function retRegFormat(str1) {
    var str = "";
    let a = str1.split(" ");
    for (var i = 0; i < a.length; i++) {
        str += a[i] + "|";
    }
    str = str.slice(0, -1);
    return str;
}

//ques.find( (a) => ("who are you".match(new RegExp(retRegFormat(a.question),"g"))).length >= a.question.split(" ").length*(3/4) )

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
//Tree

class BinarySearchTree {
    constructor() {
        /*var MedTree = new Node("Are you Male or Female?");
        MedTree.left = new Node("Do you lift heavy object like weights?");
        MedTree.left.left = new Node("Do you go to the gym?");
        MedTree.left.right = new Node("Do you go for jogging?");
        MedTree.left.left.left = new Node("Do you do yoga?");
        MedTree.left.left.right = new Node("Excercise is a necessary medicine in our life?");
        MedTree.left.left.left.left = new Node("You are an strong and healthy man?");
        MedTree.left.left.left.right = new Node("You are an strong  man?");

        MedTree.right = new Node("Can you cook?");
        MedTree.right.left = new Node("Did you learn through a course?");
        MedTree.right.right = new Node("Do you want to learn cooking?");
        MedTree.right.left.left = new Node("Is your cooking skills better than a sous chef?");
        MedTree.right.left.left.left = new Node("Congratulations! You have been seleted for a trail round at Hell's Kitchen");
        MedTree.right.left.left.right = new Node("Here are some websites to improve uar skills and getter a higher degree .... .com");
        MedTree.right.left.right = new Node("Here are some courses to improve uar skills and getter a higher degree .... .com");
        MedTree.right.right.left = new Node("Here are some websites to improve uar skills and getter a higher degree .... .com");
        MedTree.right.right.right = new Node("There are lots of field where your hidden talent can be useful?");*/
        // root of a binary seach tree 
        var MedTree = new Node("Do you feel pain/fatigue in your body?");

        MedTree.left = new Node("Do you have/feel fever?");
        MedTree.left.left = new Node("Do you have/feel headache?");
        MedTree.left.right = new Node("Do you have/feel swelling?");
        MedTree.left.left.left = new Node("Do you have/feel Breathing Problem?");
        MedTree.left.left.right = new Node("Do you have/feel Weight loss?");
        MedTree.left.right.left = new Node("Do you have/feel Stiffness?");
        MedTree.left.right.right = new Node("NADA");
        MedTree.left.left.right.left = new Node("You might have back Back Pain. /n Physical discomfort occurring anywhere on the spine or back, ranging from mild to disabling.");
        MedTree.left.left.left.left = new Node("Have you started vomiting in the pass weeks?");
        MedTree.left.left.left.right = new Node("NADA");
        MedTree.left.left.left.left.left = new Node("Do you have/feel swelling?");
        MedTree.left.left.left.left.right = new Node("Do you have/feel cough?");
        MedTree.left.left.left.left.left.left = new Node("Do you have/feel Pain in your joints or muscles pain or skin rash?");
        MedTree.left.left.left.left.left.right = new Node("NADA");
        MedTree.left.left.left.left.right.left = new Node("You might have Cold and flu disease i.e. A common viral infection of the nose and throat.");
        MedTree.left.left.left.left.right.right = new Node("NADA");
        MedTree.left.left.left.left.left.left.left = new Node("You might have Dengue i.e. A mosquito-borne viral disease occurring in tropical and subtropical areas.");
        MedTree.left.right.left = new Node("Do you have/feel Stiffness?");
        MedTree.left.right.left.left = new Node("Do you have/feel pain in your joints?");
        MedTree.left.right.left.left.left = new Node("Do you have/feel bruises?");
        MedTree.left.right.left.left.left.left = new Node("You might have sprains in your body i.e. A stretching or tearing of ligaments, the fibrous tissue that connects bones and joints.");
        MedTree.left.right.left.left.left.right = new Node("you might have osteoarthritis i.e. A type of arthritis that occurs when flexible tissue at the ends of bones wears down.");
        MedTree.left.right.left.left.right = new Node("Do you have/feel tiredness lately?");
        MedTree.left.right.left.left.right.left = new Node("You have Knee problems such as knee pain which can eventually lead to arthritis, gout and infection");

        MedTree.right = new Node("Do you have/feel cough?");
        MedTree.right.left = new Node("You might have osteoporosis i.e. A condition in which bones become weak and brittle.");
        MedTree.right.right = new Node("Do you have/feel skin rash?");
        MedTree.right.right.left = new Node("Do you have/feel white spots?");
        MedTree.right.right.right = new Node("Do you have/feel headache?");
        MedTree.right.right.left.left = new Node("Do you have/feel bruises?");
        MedTree.right.right.left.right = new Node("Do you have/feel swelling?");
        MedTree.right.right.left.left.left = new Node("Do you have/feel bleeding?");
        MedTree.right.right.left.left.left.left = new Node("You might have lichen sclerosus i.e. A chronic condition that causes thin, white patches of skin, usually in the genital area.")
        MedTree.right.right.left.right.left = new Node("Do you have/feel weight loss?");
        MedTree.right.right.left.right.left.left = new Node("Do you have/feel fever?");
        MedTree.right.right.left.right.left.left.left = new Node("You might have Arthritis i.e. Inflammation of one or more joints, causing pain and stiffness that can worsen with age");
        MedTree.right.right.left.right.left.right = new Node("Do you have/feel breathing problem?");
        MedTree.right.right.left.right.left.right.left = new Node("Do you have/feel sneezing?");
        MedTree.right.right.left.right.left.right.left.left = new Node("Do you have/feel eye irritation?");
        MedTree.right.right.left.right.left.right.left.left.left = new Node("You might have allergies i.e. A condition in which the immune system reacts abnormally to a foreign substance. There different types of alergies such as drug allergy, food allergy,, latex, etc.");

        this.root = MedTree;
        this.nNode = MedTree;
    }


    // Helper function 
    getRootNode() {
        return this.root;
    }
    getTempNode() {
        return this.nNode;
    }
    setTempNode(val) {
        this.nNode = val;
    }
    traverseTree(value) {
        var res;
        if (this.nNode.left != null || this.nNode.right != null) { //leaf node condition
            if (value.toLowerCase() == "yes" || value.toLowerCase() == "sure" || value.toLowerCase() == "male") {
                this.nNode = this.nNode.left;
                res = this.nNode.data;
            } else if (value.toLowerCase() == "no" || value.toLowerCase() == "female") {
                this.nNode = this.nNode.right;
                res = this.nNode.data;
            } else {
                res = "Sorry. I didnt get yuh can please type the answer again!";
            }
        }
        return res;
    }
}

console.log('Chatbot: Client-side code running');

const button = document.getElementById('rButton');
const input = document.getElementById('userText');
input.addEventListener('keyup', function(e) {
    if (e.keyCode == 13) {
        console.log("Enter key was pressed");
        button.click();
    }
});
var resp;
iniBST = new BinarySearchTree();
const div = document.getElementById('top-section-chats');
var html;
// var html = `<div class="response-chat">${iniBST.getRootNode().data}</div>`;
// div.innerHTML += html;
BST = new BinarySearchTree();
let phase = 0;
var count = 1;
var keys = "";
var response = "";
button.addEventListener('click', function(e) {

    //fetching reply and viewing to the screen
    var reply = document.getElementById('userText').value;
    html = `<div class="reply-chat">${reply}</div>`;
    div.innerHTML += html;
    //tree code 
    if (phase == 0) { //greeting phase
        response = "Good Morning! what is your name?";
        keys = "name";
        phase = 1;
    } else if (phase == 1) {
        switch (keys) {
            case "name":
                tmp = reply.split(" ");
                personals.name = tmp[tmp.length - 1];
                response = "Hello " + personals.name;
                break;
            case "location":
                personals.location = reply;
                break;
            case "gender":
                personals.gender = (reply.toLowerCase().includes("f") ? "Female" : "Male");
                break;
            case "testTaken":
                personals.testTaken = reply.toLowerCase();
                if (personals.testTaken.toLowerCase() == "yes") {
                    phase = 2;
                    keys = "p2";
                }
        }
        if (keys != "p2") {
            for (let [key, value] of Object.entries(personals)) {
                if (value == "") {
                    keys = key;
                    break;
                }
            }
        }
        switch (keys) {
            case "gender":
                response = "Are you a male or female?";
                break;
            case "location":
                response = "Where do you live?";
                break;
            case "testTaken":
                response = "Do you want to take the test??";
                break;
            case "exit":
                response = "Thank you for chatting good bye!";
                keys = "Done.";
                break;
            case "p2":
                break;
            default:
                respone = "Phase 3 constructing";
                phase = 3;
        }
    }
    if (phase == 2) {
        if (count == 1) {
            // html = `<div class="response-chat">${BST.getRootNode().data}</div>`;
            response = BST.getRootNode().data;
            BST.setTempNode(BST.getRootNode());
            // div.innerHTML += html;
            // if (personals.gender == "Male") {
            //     BST.setTempNode(BST.getRootNode().left);
            // } else {
            //     BST.setTempNode(BST.getRootNode().right);
            // }
            count++;
        } else if (count == 0) {
            if (reply == "Yes") {
                count = 1;
            } else {
                response = "Thank You for using the app " + personals.name + ". Bye."
                phase = 3
            }
        } else {
            response = BST.traverseTree(reply);
            if (response == null) {
                // response = BST.getRootNode().data;
                BST.setTempNode(BST.getRootNode());
                count = 0;
                // html = `<div class="response-chat">${response}</div>`;
                div.innerHTML += html;
                response = "Do you want to take the test again";
            }
            //save checkpoint
        }
    }
    var respExample = 'Bot Replies!!!!';
    html = `<div class="response-chat">${response}</div>`;
    div.innerHTML += html;
    div.scrollTop = div.scrollHeight;
    //console.log("Yuh got a response!");
    document.getElementById('userText').value = "";
});