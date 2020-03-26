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
        var MedTree = new Node("Are you Male or Female?");
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
        MedTree.right.right.right = new Node("There are lots of field where your hidden talent can be useful?");
        // root of a binary seach tree 
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
            html = `<div class="response-chat">${(personals.gender=="Male"?iniBST.getRootNode().left.data:iniBST.getRootNode().right.data)}</div>`;
            div.innerHTML += html;
            if (personals.gender == "Male") {
                BST.setTempNode(BST.getRootNode().left);
            } else {
                BST.setTempNode(BST.getRootNode().right);
            }
            count++;
        } else {
            response = BST.traverseTree(reply);
            if (response == null) {
                response = BST.getRootNode().data;
                BST.setTempNode(BST.getRootNode());
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