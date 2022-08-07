//A set of tools for making recursion more useful by anticipating what it will need

export class Recursion{

    constructor(transformation){

    }

    transform(transformation){
        return transform
    }

    from(object){
        //returns a destructured object as an object tree
        //so no matter what the object is, we should know how to destructure it using brass tacks analysis
    }

    to(){

    }

    DivSetBaseTree(set, n, tree={}){
        if(set.length==n){
            tree[set.slice(0, n)]=set.slice(0, n)
            return
        }else if(set.length==n-1){
            tree[set.slice(0, n-1)]=set.slice(0, n-1)
            return
        }else if(set.length==2){
            tree[set.slice(0, 2)]=set.slice(0, 2)
        }else if(set.length==1){
            tree[set[0]]=set[0]
            return
        }else if(set.length==0){
            return
        }else{
            const _n = Math.ceil(set.length / n); 
            for(var i =0; i<set.length; i+=_n){
                this.DivSetBaseTree(set.slice(i, _n*(i+1)),n, tree)
            }  
            return tree
        }
        
    }
    //a description of the operation and a result associated with them
    //which one do we want? 
    iterJSliceRotateSwap(set,  i=0, j=1, s=1, r=1, n=set.length, array=[]){
        if(j==set.length){
            j=j-i;
            i=0;
        }
        if(n==0){return []}
        var slice;
        if(Array.isArray(set)){
            set = set.join("")
        }
        slice = set.slice(i, j)
        
        array.push(slice)

        set = this.rotate(set, r)
        set = this.swap(set, i, s)
        j++;
        n--;
        this.iterJSliceRotateSwap(set, i, j, r, s, n, array)
        if(!array){return []}
        return array
    }

    iterIJSliceRotateSwap(set,  i=0, j=1, s=1, r=1, n=set.length, array=[]){
        if(j==set.length){
            j=j-i;
            i=0;
        }
        if(n==0){return []}
        var slice;
        if(Array.isArray(set)){
            set = set.join("")
        }
        slice = set.slice(i, j)

        array.push(slice)

        set = this.rotate(set, r)
        set = this.swap(set, i, s)
        i++;
        j++;
        n--;
        this.iterIJSliceRotateSwap(set, i, j, r, s, n, array)
        if(!array){return []}
        return array
    }

    iterIJSSliceRotateSwap(set, i=0, j=1, s=1, r=1, n=set.length, array=[]){
        if(j==set.length){
            j=j-i;
            i=0;
        }
        if(n==0){return []}
        var slice;
        if(Array.isArray(set)){
            set = set.join("")
        }
        slice = set.slice(i, j)

        array.push(slice)

        set = this.rotate(set, r)
        set = this.swap(set, i, s)
        i++;
        j++;
        s++;
        n--;
        this.iterIJSSliceRotateSwap(set, i, j, r, s, n, array)
        if(!array){return []}
        return array
    }

    iterJSliceRotate(set, i=0, j=1, r=1, n=set.length, array=[]){
        if(n==0){return []}
        var slice;
        if(Array.isArray(set)){
            set = set.join("")
        }
        slice = set.slice(i, j)

        array.push(slice)

        set = this.rotate(set, r)
        j++;
        n--;
        this.iterJSliceRotate(set, i, j, r, n, array)
        if(!array){return []}
        return array
    }


    iterJSlice(set, i=0, j=1, array=[]){
        if(j==set.length+1){return []}
        var slice;
        if(Array.isArray(set)){
            set = set.join("")
        }
        slice = set.slice(i, j)

        array.push(slice)

        j++;
        this.iterJSlice(set, i, j, array)
        if(!array){return []}
        return array
    }

    reverseIterJSlice(set, i=0, j=1, array=[]){
        if(j==0){return []}
        var slice;
        if(Array.isArray(set)){
            set = set.join("")
        }
        slice = set.slice(i, j)

        array.push(slice)

        j--;
        this.reverseIterJSlice(set, i, j, array)
        if(!array){return []}
        return array
    }

    iterIJSliceRotate(set, i=0, j=1, r=1, n=set.length, array=[]){
        if(n==0){return []}
        var slice;
        if(Array.isArray(set)){
            set = set.join("")
        }
        slice = set.slice(i, j)

        array.push(slice)

        set = this.rotate(set, r)
        i++
        j++;
        n--;
        this.iterIJSliceRotate(set, i, j, r, n, array)
        if(!array){return []}
        return array
    }

    reverseIterIJSliceRotate(set, i=0, j=1, r=1, n=set.length, array=[]){
        if(n==0){return []}
        var slice;
        if(Array.isArray(set)){
            set = set.join("")
        }
        slice = set.slice(i, j)

        array.push(slice)

        set = this.rotate(set, r)
        i--;
        j--;
        n--;
        this.iterIJSliceRotate(set, i, j, r, n, array)
        if(!array){return []}
        return array
    }

    swap(a, i, j){
        if((i>a.length-1) || (j>a.length-1)){
            return a.slice()
        }
        if(Array.isArray(a)){
            var b = a.slice()
            const tmp = b[i]
            b[i] = b[j]
            b[j] = tmp
            if(!b){return []}
            return b
        }else if(typeof a === 'string'){
            var b = a.slice().split("")
            const tmp = b[i]
            b[i] = b[j]
            b[j] = tmp
            if(!b){return []}
            return b.join("")
        }else{
            throw Error("swap expects string or array")
        }

    }

    isOdd(num) { return num % 2;}

    factorialize(n){
        var factorial = 1
        for(var i = 0; n>i; n--){
            factorial*=n
        }
        return factorial
    }

    rotate(str, n=1){
        if(str.length==1){
            return str
        }

        if(n>=0){
            for(var i = 0; i<n; i++){
                str = str.slice()
                if(Array.isArray(str)){
                    var char = str.shift();
                    str.push(char)
    
                }else{
                    var char = str[0]
                    str = str.slice(1)+char
                }
            }
            if(!str){return []}
            return str
        }else if(n<0){
            for(var i=n; i!=0; i++){
                str = str.slice()
                if(Array.isArray(str)){
                    var chars = str.slice(0, str.length-1)
                    str = str.slice(-1).concat(chars)
                }else{
                    var chars = str.slice(0, str.length-1)
                    str = str.slice(-1)+chars
                }
            }
            if(!str){return []}
            return str
        }
    }

    iterables(str, n=0, array=[]){
        if(n==str.length){
            return array
        }else{
            array.push(str.slice(n, n+1)[0])
            this.iterables(str, n+1, array)
        }
        return array
    }

    paths(tree, path={}, gArr=[], n=0){
        if(!Object.keys(tree).length){
            return path
        }else{
            if(!n){
                for(var i = 0; i<Object.keys(tree).length; i++){
                    var p = {}
                    this.fillPath(Object.keys(tree)[i], p)
                    gArr.push(this.paths(tree[Object.keys(tree)[i]], p, [], n+1))
                }
                return gArr
            }else{
                for(var i=0; i<Object.keys(tree).length; i++){
                    var p = Object.assign({}, path);
                    this.fillPath(Object.keys(tree)[i], p)
                    this.paths(tree[Object.keys(tree)[i]], p, [], n+1)
                }

            }
        }
        return p
    }

    fillPath(key, path){
        if(!Object.keys(path).length){
            path[key]={}
            return
        }
        this.fillPath(key, path[Object.keys(path)[0]])
        return path
    }
    
}