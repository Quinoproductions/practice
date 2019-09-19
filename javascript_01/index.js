var alumnos = [
    {
        name: 'joaquin',
        lastname: 'soria',
        age: '22',
        work: 'frelance',
        school: 'rollingcode'
    },
    {
        name: 'federico',
        lastname: 'soria',
        age: '30',
        work: 'factory',
        school: 'rollingcode'
    },
    {
        name: 'luis',
        lastname: 'vasquez',
        age:'29',
        work: 'office',
        school: 'rollingcode'
    },

]; 

console.log(alumnos); 

var familia = [
    {
        name:'susana' ,
        lastname: 'rodriguez' ,
        age:'63' ,
        work: 'housewife',
        hobbies: [
            {
                type: 'paint',
            },
            {
                type: 'read',
            },
            {
                type: 'facebook',
            },
        ]
    },
    {
        name: 'luis',
        lastname: 'soria',
        age: '58',
        work: 'retired',
        hobbies: [
            {
                type: 'paint',
            },
            {
                type: 'read',
            },
            {
                type: 'facebook',
            },
        ]
    },
    {
        name: 'joaquin',
        lastname: 'soria',
        age: '22',
        work: 'frelance',
        hobbies: [
            {
                type: 'paint',
            },
            {
                type: 'read',
            },
            {
                type: 'facebook',
            },
        ]
        
        
    },
    {
        name: 'federico',
        lastname: 'soria',
        age: '30',
        work: 'factory',
        hobbies: [
            {
                type: 'paint',
            },
            {
                type: 'read',
            },
            {
                type: 'facebook',
            },
        ]
    },
];

for(var i = 0; i<familia.length; i++) {
    console.log('familiares de', familia[i].name);
    for(var j = 0; j< familia[i].hobbies.length; j++){
        console.log(familia[i].hobbies[j].type);
    }
    console.log('________________')   
}