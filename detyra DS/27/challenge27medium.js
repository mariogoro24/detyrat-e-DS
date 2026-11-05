var person = {
    FirstName: "Mario",
    LastName: "Goro",
    age: 16,
    FullName: function(){
        return this.FirstName + " " + this.LastName;
    }
};
console.log(person.FullName());