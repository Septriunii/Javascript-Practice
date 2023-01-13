const info={
    name : 'Anthony',
    age : 21,
    address: 'ZSP',

    myAge: function(){
        console.log(this.age);
    }
}


info.myAge()