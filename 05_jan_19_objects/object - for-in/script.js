const dog = {
    tail: true,
    legs: 4,
    sound: 'woof',
    makeSound: function(){
        console.log(this.sound, this.sound);
    }
};

//Alla key value pairs i objektet dog loggas
for(const key in dog){
    console.log(key, dog[key]);
}

console.log(dog['tail'], dog.tail); //Två olika sätt att komma åt en egenskap i ett objekt, egenskapsnamnet är alltid en String
