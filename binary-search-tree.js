class Node {
    constructor(value, left = null, right = null){
        this.value = value
        this.left = left
        this.right = right
    }
}

class BinarySearchTree {

    constructor(){
        this.root = null
    }

    min(){
        if(this.root === null){
            return null
        }
        else {
            let node = this.root
            while(node.left){
                node = node.left
            }
            return node.value
        }
    }

    max(){
        if(this.root === null){
            return null
        }
        else {
            let node = this.root
            while(node.right){
                node = node.right
            }
            return node.value
        }
    }

    findValue(data){

        const find = function(node){

            if(node.value == data){
                return true
            }
            else if(node.value > data){
                if(node.left == null || node.left < data) return false
                return find(node.left)
            }
            else if(node.value < data){
                if(node.right == null || node.right > data) return false
                return find(node.right)
            }
        }
        if(this.root === null){
            return false
        }
        else {
            return find(this.root)
        }
    }

    add(value) {
        const searchTree = function(value, node){
            if(value < node.value){
                if(node.left == null){
                    node.left = new Node(value)
                    return
                }
                else {
                    searchTree(value, node.left)
                }
            }
            else {
                
                if(node.right == null) {
                    node.right = new Node(value)
                    return
                }
                else {
                    searchTree(value, node.right)
                }
            }
        }

        if(this.root == null){
            this.root = new Node(value)
            return
        }
        else{
            return searchTree(value, this.root)
        }
    }

    breadthFirstSearch(){
        if(this.root == null){
            return null
        }
        else{
            let ans = []
            let queue = []
            queue.push(this.root)
                while(queue.length > 0){
                    let node = queue.shift()
                    ans.push(node.value)

                    if(node.left !== null){
                        queue.push(node.left)
                    }
                    if(node.right !== null){
                        queue.push(node.right)
                    }
                } 
            return ans          
        }
    }



    depthFirstSearch( ){
        if(this.root === null){
            return null
        }
        else {
            let ans = []
            let search = function(node){
                ans.push(node.value)
                node.left && search(node.left)
                node.right && search(node.right)
            }
            search(this.root)
            return ans
        }
    }
}




let tree = new BinarySearchTree()

tree.add(9)
tree.add(4)
tree.add(17)
tree.add(3)
tree.add(6)
tree.add(10)
tree.add(22)
tree.add(5)
tree.add(7)
tree.add(20)


console.log(tree)
console.log(tree.breadthFirstSearch())
console.log(tree.depthFirstSearch())

console.log(tree.min())
console.log(tree.max())

console.log(tree.findValue(5))

