class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
//Tree

export class BinarySearchTree {
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
    traverseTree(value) {
        var res;
        if (value.toLowerCase() == "yes" || value.toLowerCase() == "sure" || value.toLowerCase() == "male") {
            nNode = nNode.left;
            res = nNode.data;
        } else if (value.toLowerCase() == "no" || value.toLowerCase() == "female") {
            nNode = nNode.right;
            res = nNode.data;
        } else {
            res = "Sorry. I didnt get yuh can please type the answer again!";
        }
        return res;
    }
}