//Que1--> create const object called "product" to store information shown in the picture:

const product={
    title:'Paker Jotter Standard CT Ball Pen',
    Rating:4,
    offer:5,
    price:270
};
console.log(product);
console.log(typeof(product)) //output-->object

//Que2--> Create a const object "profile" to store information shown in the picture:

const profile={
    username: 'Vaishali Gupta',
    isfollow: false,
    followers: '569K followers',
    following: '4 following',
};

console.log(profile);
console.log(typeof(profile)); // object
console.log(profile['username']); // vaishali gupta
console.log(typeof profile[('username')]); // string